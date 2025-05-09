interface  Props {
    title: string;
    description: string;
}

const AboutUsCard = (props: Props) => {
  return (
    <div className="flex flex-col  shadow rounded p-5">
      <h3 className="text-start mb-4" >{props.title}</h3>
      <p className="text-justify text-gray-700" >
        {props.description}
      </p>
    </div>
  );
};

export default AboutUsCard;
