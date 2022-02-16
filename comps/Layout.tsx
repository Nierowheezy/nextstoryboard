import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }: any) => {
  return (
    <div className="content">
      <Navbar />
      <Box padding="20px" bgColor="#E5E5E5">
        {children}
      </Box>
      <Footer />
    </div>
  );
}

export default Layout;