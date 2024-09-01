import style from './flex.module.css';

const Flex = ({children,gap,direction='row',...props}) =>{
  const flexGap = style[`gap-${gap}`];
  const flexDirection = style[`direction-${direction}`];
  return( 
    <div className={`${style.flex} ${flexGap} ${flexDirection}`} {...props}>{children}</div>
  );
}
export default Flex;