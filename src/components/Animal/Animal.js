export default function Animal(props) {
  return (
    <div className="animal">
      Animal: {props.name} {props.says}
      <img src={`${process.env.PUBLIC_URL}/${props.name}.webp`} />
    </div>
  );
}
