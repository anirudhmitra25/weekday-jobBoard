import { useEffect, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./FiltersStyles.css";
import { IFilters } from "../types";

const remoteOnSiteOptions = ["Remote", "In-Office"];
const techStackOptions = ["ios", "android"];
const roleOptions = ["Frontend", "Backend", "tech lead"];
const minBasePayOptions = [
  { label: "0", value: 0 },
  { label: "$20,000", value: 20 },
  { label: "$40,000", value: 40 },
  { label: "$60,000", value: 60 },
  { label: "$80,000", value: 80 },
  { label: "$100,000", value: 100 },
];

const minExperienceOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Filters({ setFilter }: IFilters) {
  const [minExperience, setMinExperience] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnSite, setRemoteOnSite] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState(null);

  useEffect(() => {
    setFilter({
      minBasePay: minBasePay,
      minExperience: minExperience,
      companyName: companyName,
      location: location,
      remoteOnSite: remoteOnSite,
      techStack: techStack,
      role: role,
    });
  }, [
    minBasePay,
    minExperience,
    companyName,
    location,
    remoteOnSite,
    techStack,
    role,
  ]);
  return (
    <div className="filters-container">
      <div className="filter">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="min-experience-label">Min Experience</InputLabel>
          <Select
            labelId="min-experience-label"
            value={minExperience || ""}
            onChange={(e: any) => setMinExperience(e.target.value)}
            multiple={false}
            renderValue={(selected) => (
              <div>
                {selected}
                {selected && (
                  <IconButton
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setMinExperience(null);
                      e.stopPropagation();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </div>
            )}
          >
            {minExperienceOptions.map((exp, key) => (
              <MenuItem key={key} value={exp}>
                {exp} Year
              </MenuItem>
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
            onChange={(e: any) => setRemoteOnSite(e.target.value)}
            renderValue={(selected) => {
              selected.join(", ");
              return (
                <div>
                  {selected}
                  {selected && (
                    <IconButton
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setRemoteOnSite([]);
                        e.stopPropagation();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </div>
              );
            }}
          >
            {remoteOnSiteOptions.map((option) => (
              <MenuItem key={option} value={option}>
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
            onChange={(e: any) => setTechStack(e.target.value)}
            renderValue={(selected) => {
              selected.join(", ");
              return (
                <div>
                  {selected}
                  {selected && (
                    <IconButton
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setTechStack([]);
                        e.stopPropagation();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </div>
              );
            }}
          >
            {techStackOptions.map((option) => (
              <MenuItem key={option} value={option}>
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
            onChange={(e: any) => setRole(e.target.value)}
            renderValue={(selected) => {
              selected.join(", ");
              return (
                <div>
                  {selected}
                  {selected && (
                    <IconButton
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setRole([]);
                        e.stopPropagation();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  )}
                </div>
              );
            }}
          >
            {roleOptions.map((option) => (
              <MenuItem key={option} value={option}>
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
            value={minBasePay || ""}
            label={minBasePay || ""}
            onChange={(e: any) => setMinBasePay(e.target.value)}
          >
            {minBasePayOptions.map((option) => (
              <MenuItem key={option.label || ""} value={option.value || ""}>
                <ListItemText primary={option.label} />
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
