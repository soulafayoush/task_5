import './Work.css'
import Header from '../Header/Header';


const steps = [
    {
      icon: <Frame color={'text-primary'} />,
      title: "Search Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },
    {
      icon: <Check color={'white'} /> ,
      title: "Select Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    },
    {
      icon: <Confirm color={'text-primary'} /> ,
      title: "Confirm Apartment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
    }
  ];


const HowItWorks = () => {
  return (
    <>
    <div className="container howItWork py-16 lg:py-24">
      <Header title={'How it Works'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing eli'} />
      <div className="flex flex-col md:flex-row justify-between items-stretch howItWorkCard">
        {steps.map((step, index) => (
          <div 
            key={index} 
            style={{'padding' : '30px 40px 80px'}}
            className={`flex-1 rounded-2xl ${
              index === 1 ? 'bg-primary text-white' : 'bg-white'
            }`}
          >
            <div className={`mb-4`}>
              {step.icon}
            </div>
            <h3 style={{'fontSize' : '22px'}} className="font-semibold mb-2">{step.title}</h3>
            <p className={`${index === 1 ? 'text-blue-100' : 'text-desc'} text-sm`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default HowItWorks