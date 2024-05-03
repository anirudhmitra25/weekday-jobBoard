import { useState } from "react";
import { IJobCard } from "../types";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import "./JobCardStyles.css";
import JobModal from "./JobModal";
import BoltIcon from "@mui/icons-material/Bolt";

export default function JobCard({
  companyName,
  jobRole,
  jdLink,
  jdUid,
  jobDetailsFromCompany,
  maxJdSalary,
  minJdSalary,
  maxExp,
  minExp,
  location,
  logoUrl,
  salaryCurrencyCode,
}: IJobCard) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      className="card"
      sx={{ minWidth: 275, maxWidth: 350, borderRadius: 5 }}
    >
      <CardContent>
        <div className="job-header">
          <img src={logoUrl} height={"30em"} width={"30em"} />
          <div>
            <Typography
              sx={{ fontSize: 18, fontWeight: "700" }}
              color="text.secondary"
            >
              {companyName}
            </Typography>
            <Typography sx={{ fontSize: 16 }} color="text.primary">
              {jobRole}
            </Typography>
            <Typography
              sx={{ fontSize: 13, fontWeight: "500" }}
              color="text.primary"
            >
              {location}
            </Typography>
          </div>
        </div>
        {salaryCurrencyCode && minJdSalary && maxJdSalary && (
          <Typography sx={{ fontSize: 15 }} color="text.secondary">
            {`Estimated Salary: ${minJdSalary},000 - ${maxJdSalary},000 ${salaryCurrencyCode}`}
          </Typography>
        )}
        <Typography variant="h6" component="h2">
          About Company:
        </Typography>
        <Typography variant="h6" component="h2">
          About us
        </Typography>
        <div className="description-container">
          <div className="job-description">{jobDetailsFromCompany}</div>
          <div className="fade-gradient"></div>
        </div>
        <div className="view-job">
          <span onClick={handleOpen}>View Job</span>
        </div>

        <div className="footer">
          {minExp && (
            <>
              <p>Minimum Experience</p>
              <span>{minExp} years</span>
            </>
          )}
        </div>
        <JobModal
          open={open}
          handleClose={handleClose}
          jobDetailsFromCompany={jobDetailsFromCompany}
          logoUrl={logoUrl}
          companyName={companyName}
          jobRole={jobRole}
          location={location}
          salaryCurrencyCode={salaryCurrencyCode}
          minJdSalary={minJdSalary}
          maxJdSalary={maxJdSalary}
        />
      </CardContent>
      <CardActions>
        <Button
          sx={{
            width: "100%",
            bgcolor: "#7FFFD4",
            color: "black",
            borderRadius: 2,
            minHeight: "2.5rem",
            fontWeight: "600",
          }}
          className="easy-apply"
          variant="contained"
          size="small"
        >
          <BoltIcon
            sx={{
              color: "yellow",
            }}
          />
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
}
