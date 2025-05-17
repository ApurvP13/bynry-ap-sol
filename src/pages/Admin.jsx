import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Sonar from "../components/Sonar";
import { AnimatePresence, motion } from "framer-motion";
import ListSkeleton from "../components/ListSkeleton";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    imageUrl: "",
    interests: "",
    lat: "",
    lng: "",
  });
  const [showSonar, setShowSonar] = useState(false);
  const [sonVar, setSonVar] = useState("normal");
  const [sonText, setSonText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/api/profiles")
        .then((res) => res.json())
        .then((data) => {
          setProfiles(data.profiles);
          setLoading(false); // 👈 Stop loading after fetch
        });
    }, 2000);
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/profiles/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setProfiles(data.profiles));
  };

  const handleAdd = () => {
    // Check if all required fields are non-empty
    const { name, job, email, phone, imageUrl, interests, lat, lng } = formData;

    if (
      !name.trim() ||
      !job.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !imageUrl.trim() ||
      !interests.trim() ||
      !lat.trim() ||
      !lng.trim()
    ) {
      setSonVar("warning");
      setSonText("Please enter details in the field");
      setShowSonar(true);
      setTimeout(() => {
        setShowSonar(false);
        setSonText("");
        setSonVar("normal");
      }, 5000);
      return;
    }

    const payload = {
      ...formData,
      interests: formData.interests.split(",").map((i) => i.trim()),
    };
    fetch("/api/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setSonVar("normal");
        setSonText("The profile has been added");
        setShowSonar(true);
        setTimeout(() => {
          setShowSonar(false);
        }, 5000);
        setProfiles(data.profiles);
        setShowModal(false);
        setFormData({
          name: "",
          job: "",
          email: "",
          phone: "",
          imageUrl: "",
          interests: "",
          lat: "",
          lng: "",
        });
      });
  };

  return (
    <div className="p-6 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <motion.button
          whileTap={{
            scale: 0.9,
            opacity: 0.7,
            transition: { duration: 0.1 },
          }}
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Profile
        </motion.button>
      </div>

      {/* Sonar */}
      <AnimatePresence>
        {showSonar && (
          <motion.div
            key="sonar"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed z-1000 right-4 bottom-4"
          >
            <Sonar variant={sonVar} text={sonText} />
          </motion.div>
        )}
      </AnimatePresence>

      {showModal && (
        <div className="fixed font-sans inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-black p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-xl bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent  font-semibold mb-4 text-center">
              New Profile
            </h2>
            <div className="grid gap-3">
              {[
                "name",
                "job",
                "email",
                "phone",
                "imageUrl",
                "interests",
                "lat",
                "lng",
              ].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="border-r-1 focus:border-t-1 focus:border-b-1 transition-all duration-200 font-semibold tracking-widest font-mono border-l-1 border-blue-400 p-2 text-blue-300 focus:outline-none rounded-lg"
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ))}
              <button
                onClick={handleAdd}
                className="mt-2 px-4 py-2 font-sans font-semibold tracking-wide bg-gradient-to-br from-slate-200 to-blue-500 text-white rounded hover:bg-gradient-to-bl hover:scale-105 hover:text-green-200 transition-all duration-200"
              >
                Save Profile
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-red-500 font-sans font-semibold tracking-wide hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {loading
          ? [...Array(10)].map((_, i) => <ListSkeleton key={i} />)
          : profiles.map((profile) => (
              <div
                key={profile.id}
                className="w-full flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={profile.imageUrl}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-lg font-medium text-white">
                    {profile.name}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(profile.id)}
                  className="px-3 py-1 text-3xl rounded-full bg-red-600 text-rose-300  hover:bg-red-700"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Admin;
