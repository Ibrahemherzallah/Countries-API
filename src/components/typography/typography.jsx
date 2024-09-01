import style from './typography.module.css';
const Typography = ({component,variant,children,size,...props}) => {
  const Component = component;
  return(
      <Component className={`${style[variant]} ${style[size]}`} {...props}>{children}</Component>
  );
}
export default Typography;