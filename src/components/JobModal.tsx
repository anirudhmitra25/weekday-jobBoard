import { Modal, Box, Typography, Button } from "@mui/material";
import { IJobModal } from "../types";
export default function JobModal({
  open,
  handleClose,
  jobDetailsFromCompany,
  logoUrl,
  companyName,
  jobRole,
  location,
  salaryCurrencyCode,
  minJdSalary,
  maxJdSalary,
}: IJobModal) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-content">
        <div className="job-header">
          <img src={logoUrl} height={"50em"} width={"50em"} />
          <div>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              color="text.secondary"
            >
              {companyName}
            </Typography>
            <Typography variant="h6" component="h2" color="text.primary">
              {jobRole}
            </Typography>
            <Typography variant="h6" component="h2" color="text.secondary">
              {location}
            </Typography>
          </div>
        </div>
        <Typography sx={{ fontSize: 15 }} color="text.secondary">
          {salaryCurrencyCode && minJdSalary && maxJdSalary && (
            <Typography sx={{ fontSize: 15 }} color="text.secondary">
              {`Estimated Salary: ${minJdSalary},000 - ${maxJdSalary},000 ${salaryCurrencyCode}`}
            </Typography>
          )}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Description
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {jobDetailsFromCompany}
        </Typography>
        <Button
          sx={{
            width: "100%",
            borderRadius: 2,
            minHeight: "2.5rem",
            fontWeight: "600",
            marginTop: "1rem",
          }}
          className="easy-apply"
          variant="contained"
          size="small"
        >
          Apply
        </Button>
      </Box>
    </Modal>
  );
}
