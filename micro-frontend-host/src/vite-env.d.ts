/// <reference types="vite/client" />
declare module "remoteApp/HostButton" {
  import { ComponentType } from "react";

  export interface HostButtonProps {
    text: string;
  }

  const HostButton: ComponentType<HostButtonProps>;

  export default HostButton;
}
