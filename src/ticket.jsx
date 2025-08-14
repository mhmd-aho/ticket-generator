import ticket from '/src/assets/images/pattern-ticket.svg';
import logo from '/src/assets/images/logo-full.svg';
import githubLogo from '/src/assets/images/icon-github.svg'
export default function Ticket(props){
    const data = props.data
    return(
        <div className=' col-start-1 row-start-1 xl:w-2/5 w-full h-full xl:p-2 xl:pt-24 p-2 pt-22 flex flex-col justify-start items-center gap-20'>
            <div className="w-full flex flex-col justify-center items-center gap-6">
                <p className='font-in font-bold xl:text-4xl text-2xl text-neutral-50  text-center '>Congrats, <span className="bg-gradient-to-r from-gra to-neutral-50 bg-clip-text text-transparent font-extrabold">{data.name}</span>! Your ticket is ready.</p>
                <p className="text-neutral-300 font-in text-center w-5/6">we've emailed your ticket to<br/><span className="text-orange-700">{data.email}</span> and will send updates in<br/>the run up to the event </p>
            </div>
            <div  className="w-3/4 h-fit grid place-items-center">
                <div className='col-start-1 row-start-1'>
                    <img src={ticket}/>
                </div>
                <div className='col-start-1 row-start-1 w-full h-full flex justify-between'>
                <div className='w-3/4 h-full flex flex-col justify-between items-center sm:p-4  p-1'>
                    <div className='flex flex-col justify-start items-baseline gap-1 w-full'>
                        <img src={logo} className=' w-2/3'/>
                        <p className='font-in text-neutral-300 sm:text-sm text-[10px] pl-9'>jan 31, 2025 / Austin, TX</p> 
                    </div>
                    <div className='w-full h-1/3 flex justify-start items-center space-x-3'>
                        <div className='xl:w-1/5 sm:w-16 w-10 h-full overflow-hidden rounded-xl'>
                            <img src={data.file} className='w-full h-auto object-cover rounded-xl'/>
                        </div>
                        <div>
                            <h1 className='text-neutral-50 font-in xl:text-xl sm:text-lg text-sm '>{data.name}</h1>
                            <span className='flex justify-start items-center space-x-0.5'>
                                <img className='w-4' src={githubLogo} />
                                <p className='text-neutral-300 font-in text-sm'>@{data.githubUser}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <p className='font-in text-neutral-500 text-2xl self-center transform rotate-90'>#{data.code}</p>
                </div>
            </div>
        </div>
    )
}