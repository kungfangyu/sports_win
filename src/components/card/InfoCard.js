import {
    Card,
    Accordion, AccordionSummary, AccordionDetails,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  
  const InfoCardNormal = styled(Card)(() => {
    return {
      width: "100%",
      borderRadius: "16px",
      padding: "12px",
      boxShadow: 'none',
      backgroundColor: "#EDF8FA",
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    };
  });
  
  const InfoCardNormalLarge = styled(Card)(() => {
    return {
      maxWidth: "100%",
      borderRadius: "16px",
      padding: "12px",
      boxShadow: 'none',
      backgroundColor: "#F1F3F4",
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    };
  });
  
  
  export { InfoCardNormal, InfoCardNormalLarge };
  