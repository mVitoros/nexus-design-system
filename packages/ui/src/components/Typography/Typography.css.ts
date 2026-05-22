import { vars } from "@nexus/tokens";
import { styleVariants } from "@vanilla-extract/css";
import { createTypographyStyleMapper } from "./utils";

const typographyMapper = createTypographyStyleMapper(vars.typography);

export const textStyles = styleVariants(typographyMapper);
