import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NiceSelect from "../Header/NiceSelect";

function Booking() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination: "",
        adventureType: "",
        duration: "",
        category: ""
    });

    const [formMessage, setFormMessage] = useState({ text: "", type: "" });

    const destinationOptions = [
        { value: "Hobart", label: "Hobart" },
        { value: "Launceston", label: "Launceston" },
        { value: "Cradle Mountain", label: "Cradle Mountain" },
        { value: "Freycinet", label: "Freycinet" },
        { value: "Port Arthur", label: "Port Arthur" },
        { value: "Bruny Island", label: "Bruny Island" },
        { value: "Wineglass Bay", label: "Wineglass Bay" },
        { value: "Strahan", label: "Strahan" },
    ];
    const adventureOptions = [
        { value: "Group Tour", label: "Group Tour" },
        { value: "Private Tour", label: "Private Tour" },
        { value: "Wildlife", label: "Wildlife" },
        { value: "Adventure", label: "Adventure" },
        { value: "History & Culture", label: "History & Culture" },
    ];
    const durationOptions = [
        { value: "1 days", label: "1 days" },
        { value: "2 days", label: "2 days" },
        { value: "3 days", label: "3 days" },
        { value: "4 days", label: "4 days" },
        { value: "5 days", label: "5 days" },
        { value: "6 days", label: "6 days" },
    ];
    const categoryOptions = [
        { value: "Luxury", label: "Luxury" },
        { value: "Deluxe", label: "Deluxe" },
        { value: "Economy", label: "Economy" },
    ];

    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build search parameters
        const searchParams = new URLSearchParams();
        
        if (formData.destination) {
            searchParams.set('destination', formData.destination);
        }
        if (formData.adventureType) {
            searchParams.set('type', formData.adventureType);
        }
        if (formData.duration) {
            searchParams.set('duration', formData.duration);
        }
        if (formData.category) {
            searchParams.set('category', formData.category);
        }

        // Navigate to tour page with search parameters
        if (searchParams.toString()) {
            navigate(`/tour?${searchParams.toString()}`);
        } else {
            setFormMessage({ text: "Please select at least one search criteria.", type: "error" });
            setTimeout(() => setFormMessage({ text: "", type: "" }), 3000);
        }
    };

    return (
        <div className="booking-sec">
            <div className="container">
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="input-wrap">
                        <div className="row align-items-center justify-content-between">
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-route" />
                                </div>
                                <div className="search-input">
                                    <label>Destination</label>
                                    <NiceSelect
                                        options={destinationOptions}
                                        defaultValue="Select Destination"
                                        onChange={(value) => handleChange("destination", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-regular fa-person-hiking" />
                                </div>
                                <div className="search-input">
                                    <label>Type</label>
                                    <NiceSelect
                                        options={adventureOptions}
                                        defaultValue="Adventure"
                                        onChange={(value) => handleChange("adventureType", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-clock" />
                                </div>
                                <div className="search-input">
                                    <label>Duration</label>
                                    <NiceSelect
                                        options={durationOptions}
                                        defaultValue="Duration"
                                        onChange={(value) => handleChange("duration", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-map-location-dot" />
                                </div>
                                <div className="search-input">
                                    <label>Tour Category</label>
                                    <NiceSelect
                                        options={categoryOptions}
                                        defaultValue="Select Category"
                                        onChange={(value) => handleChange("category", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-btn col-md-12 col-lg-auto">
                                <button className="th-btn" type="submit">
                                    <img src="/assets/img/icon/search.svg" alt="" />
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Form Message Display */}
                        {formMessage.text && (
                            <p className={`form-messages mb-0 mt-3 ${formMessage.type === "error" ? "text-danger" : "text-success"}`}>
                                {formMessage.text}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;
