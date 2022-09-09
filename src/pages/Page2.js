import React from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import jobs from "../jobs.json";
import Container from "@mui/material/Container";

function Page2() {
  return (
    <Container>
      <Grid container spacing={5} sx={{ mt: 1 }}>
        {jobs.slice(5, 10).map((job) => (
          <Grid key={job.id} item xs={12} md={6} lg={4}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Page2;
