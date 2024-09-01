import Typography from "../typography/typography";

export const TextCardTitle = ({component,variant,children}) => {
  return(
    <Typography component={component} variant={variant}>{children}</Typography>
  );
}

export const TextCardBody = ({children,...props}) => {
  return(
    <>
      <div {...props}>{children}</div>
    </>
  );
}

export const TextCards = ({children,...props}) => {
  return(
    <>
      <div {...props}>{children}</div>
    </>
  );
}
