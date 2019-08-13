import React from "react";
import { TheGuardianServiceConsumer } from "../the-guardian-service-context";

const withTheGuardianService = () => Wrapped => {
    return props => {
      return (
        <TheGuardianServiceConsumer>
          {theGuardianService => {
            return <Wrapped {...props} theGuardianService={theGuardianService} />;
          }}
        </TheGuardianServiceConsumer>
      );
    };
  };
  
  export default withTheGuardianService;