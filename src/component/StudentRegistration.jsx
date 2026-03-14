import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dob: null,
    gender: "",
    class: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dob: date,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.studentName.match(/^[A-Za-z ]+$/))
      newErrors.studentName = "Only letters allowed";

    if (!formData.fatherName.match(/^[A-Za-z ]+$/))
      newErrors.fatherName = "Only letters allowed";

    if (!formData.motherName.match(/^[A-Za-z ]+$/))
      newErrors.motherName = "Only letters allowed";

    if (!formData.dob) newErrors.dob = "Select date of birth";

    if (!formData.gender) newErrors.gender = "Select gender";

    if (!formData.class) newErrors.class = "Enter class";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email";

    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.address) newErrors.address = "Enter address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess("Student Registered Successfully");

      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        dob: null,
        gender: "",
        class: "",
        email: "",
        phone: "",
        address: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-[20px]">
      <div className="bg-white shadow-2xl rounded-2xl p-[20px] w-full max-w-5xl lg:p-10">
        <h2 className="lg:text-4xl lg:mb-8 sm:mb-8 sm:text-3xl font-bold text-center text-blue-700  mb-4  text-[24px]">
          Student Registration
        </h2>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 text-[18px]">
            {success}
          </div>
        )}

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-[15px]"
        >
          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
            />
            {errors.studentName && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.studentName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
            />
            {errors.fatherName && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.fatherName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Mother Name
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
            />
            {errors.motherName && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.motherName}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Date of Birth
            </label>
            <DatePicker
              selected={formData.dob}
              onChange={handleDateChange}
              placeholderText="Select Date"
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-[15px] leading-[15px] lg:text-[18px]"
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            {errors.dob && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.dob}
              </p>
            )}
          </div>
          <div className="relative">
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[25px] lg:text-[18px] appearance-none"
            >
              <option className="text-[15px] lg:text-[18px]" value="">
                Select Gender
              </option>
              <option className="text-[15px] lg:text-[18px]" value="Male">
                Male
              </option>
              <option className="text-[15px] lg:text-[18px]" value="Female">
                Female
              </option>
              <option className="text-[15px] lg:text-[18px]" value="Other">
                Other
              </option>
            </select>

            <IoIosArrowDown
              lg:size={18}
              size={15}
              className="absolute right-3 lg:top-[65px] top-[50px] -translate-y-1/2 pointer-events-none"
            />

            {errors.gender && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.gender}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Class
            </label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
            />
            {errors.class && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.class}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
              autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px]"
            />
            {errors.phone && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold lg:text-[20px] text-[15px]">
              Address
            </label>
            <textarea
              name="address"
              autoComplete="off"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg lg:p-[11px] focus-visible:outline-none px-[10px] py-[6px] text-15 leading-[15px] lg:text-[18px] h-[80px]"
            />
            {errors.address && (
              <p className="text-red-500 text-[12px] lg:text-[15px]">
                {errors.address}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white lg:text-xl text-[16px] font-semibold lg:py-3 py-[10px] rounded-xl transition"
            >
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
