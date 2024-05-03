import { useState } from "react";
import { IJobCard } from "../types";
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Modal,
  Box,
} from "@mui/material";
import "./JobCardStyles.css";

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
            <Typography sx={{ fontSize: 15 }} color="text.secondary">
              {companyName}
            </Typography>
            <Typography sx={{ fontSize: 15 }} color="text.primary">
              {jobRole}
            </Typography>
            <Typography sx={{ fontSize: 15 }} color="text.primary">
              {location}
            </Typography>
          </div>
        </div>
        <Typography sx={{ fontSize: 15 }} color="text.secondary">
          Estimated Salary: {salaryCurrencyCode}
          {minJdSalary} - {maxJdSalary}
        </Typography>
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
          <p>Minimum Experience</p>
          <span>{minExp} years</span>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-content">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Full Job Description
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {jobDetailsFromCompany}
            </Typography>
          </Box>
        </Modal>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            width: "100%",
            bgcolor: "#96DED1",
            color: "black",
            borderRadius: 5,
          }}
          className="easy-apply"
          variant="contained"
          size="small"
        >
          Easy Apply
        </Button>
      </CardActions>
    </Card>
  );
}
