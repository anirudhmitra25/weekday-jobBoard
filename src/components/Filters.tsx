import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";

import "./FiltersStyles.css";

function Filters() {
  const [minExperience, setMinExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnSite, setRemoteOnSite] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);

  const remoteOnSiteOptions = ["Remote", "Hybrid", "In-Office"];
  const techStackOptions = ["JavaScript", "Python", "Java", "C++"];
  const roleOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const minBasePayOptions = [
    "0",
    "$20,000",
    "$40,000",
    "$60,000",
    "$80,000",
    "$100,000",
    "$120,000",
    "$140,000",
    "$160,000",
    "$180,000",
    "$200,000",
  ];

  const minExperienceOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="filters-container">
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="min-experience-label">Min Experience</InputLabel>
          <Select
            labelId="min-experience-label"
            value={minExperience}
            onChange={(e) => setMinExperience(e.target.value)}
          >
            {minExperienceOptions.map((exp) => (
              <MenuItem value={exp}>{exp} Year</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter">
        <TextField
          sx={{ minWidth: 200 }}
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="remote-onsite-label">Remote/On-site</InputLabel>
          <Select
            labelId="remote-onsite-label"
            multiple
            value={remoteOnSite}
            onChange={(e) => setRemoteOnSite(e.target.value)}
            renderValue={(selected) => selected.join(", ")}
          >
            {remoteOnSiteOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={remoteOnSite.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="tech-stack-label">Tech Stack</InputLabel>
          <Select
            labelId="tech-stack-label"
            multiple
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            renderValue={(selected) => selected.join(", ")}
          >
            {techStackOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={techStack.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            multiple
            value={role}
            onChange={(e) => setRole(e.target.value)}
            renderValue={(selected) => selected.join(", ")}
          >
            {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={role.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
          <Select
            labelId="min-base-pay-label"
            multiple
            value={minBasePay}
            onChange={(e) => setMinBasePay(e.target.value)}
            renderValue={(selected) => selected.join(", ")}
          >
            {minBasePayOptions.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={minBasePay.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter">
        <TextField
          sx={{ minWidth: 200 }}
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filters;
