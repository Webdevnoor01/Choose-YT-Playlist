import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export const SettingSkeletonAnimation = () => {
  const isMobile = useMediaQuery("( (max-width: 768px)");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {/* User logo & username skelton */}
      <Box
        sx={{
          width: `${isMobile ? 100 : 38}%`,
          height: "70%",
          background: "gray",
          opacity: ".5",
          borderRadius: ".5rem",
          animation: "skeleton-header .8s linear infinite alternate",
          "& .MuiTypography-root": {
            animation: "skeleton-header .8s linear infinite alternate",
          },
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
        }}
      >
        {/* username skeleton */}
        <Typography
          sx={{
            width: "50%",
            background: "white",
            // opacity: ".8",
            textAlign: "center",
            p: "1rem 0",
            m: "1rem auto",
          }}
        ></Typography>
        {/* user logo skeleton box */}
        <Box
          sx={{
            height: "10rem",
            width: "10rem",
            m: "0 auto",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        ></Box>

        {/* logo update button skeleton */}
        <Typography
          sx={{
            width: "60%",
            background: "white",
            // opacity: ".8",
            textAlign: "center",
            p: "1rem 0",
            m: "2rem auto",
          }}
        ></Typography>
      </Box>

      {/* User edit info skeleton */}
      <Box
        sx={{
          width: `${isMobile ? 100 : 60}%`,
          height: "90%",
          background: "gray",
          opacity: ".8",
          p: "1rem .5rem",
          borderRadius: ".5rem",
          animation: "skeleton-header .8s linear infinite alternate",
          "& .MuiTypography-root": {
            animation: "skeleton-header .8s linear infinite alternate",
            borderRadius: ".5rem",
          },
          "@keyframes skeleton-header": {
            "0%": {
              opacity: ".3",
            },
            "100%": {
              opacity: ".8",
            },
          },
        }}
      >
        {/* Heading skeleton */}
        <Typography
          sx={{
            width: "100%",
            backgroundColor: "white",
            p: "1rem 0",
            m: "1rem 0",
          }}
        ></Typography>
        {/* Edit buttons skeleton box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              minWidth: "20%",
              backgroundColor: "white",
              p: "1rem 0",
              m: "1rem 0",
            }}
          ></Typography>

          <Typography
            sx={{
              minWidth: "20%",
              backgroundColor: "white",
              p: "1rem 0",
              m: "1rem 0",
            }}
          ></Typography>
        </Box>

        {/* Edit inputs skeleton box */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "whitesmoke",
            opacity: ".5",
            p: "1rem .5rem",
            borderRadius: ".5rem",
          }}
        >
          <Typography
            sx={{
              width: "20%",
              backgroundColor: "gray",
              p: "1rem 0",
              m: "1rem 0",
            }}
          ></Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                minWidth: "40%",
                backgroundColor: "gray",
                p: "1rem 0",
                m: "1rem 0",
              }}
            ></Typography>
            <Typography
              sx={{
                minWidth: "40%",
                backgroundColor: "gray",
                p: "1rem 0",
                m: "1rem 0",
              }}
            ></Typography>
          </Box>

          {/* Update button skeleton */}
          <Typography
            sx={{
              width: "30%",
              backgroundColor: "gray",
              p: "1rem 0",
              m: "1rem 0",
            }}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};
