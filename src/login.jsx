import { useState } from 'react';
import infoIcon from '/src/assets/images/icon-info.svg';
import uploadIcon from '/src/assets/images/icon-upload.svg';
export default function Login(props){
    const [email,setEmail] = useState();
    const [file,setFile] = useState();
    const [fValid,setFValid] = useState();
    const [name,setName] = useState();
    const [eValid,setEValid] = useState();
    const [nValid,setNValid] = useState();
    const [githubUser,setGithubUser] = useState();
    const [ghValid,setGhValid] = useState()
const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) errors.email = "Email address is required";
    else if (!emailRegex.test(email)) errors.email = "Please enter a valid email address";
    if (!name) errors.name = "Full name is required";
    if (!file) errors.file = "Avatar is required";
    if (!githubUser) errors.githubUser = "GitHub username is required";
    setEValid(errors.email || "");
    setNValid(errors.name || "");
    setFValid(errors.file || "");
    setGhValid(errors.githubUser || "");
    if (Object.keys(errors).length === 0 && !fValid) {
        props.setData({
            name,
            email,
            file,
            githubUser,
            code: Math.floor(10000 + Math.random() * 90000),
        });
        props.setLogin(true);
    }
};
    const handleFileChange = e =>{
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500 * 1024 ){
                setFValid('File too Large. Please upload a photo under 500kb');
            }
            const reader = new FileReader(); 
            reader.onloadend = () => {
            setFile(reader.result);};
            reader.readAsDataURL(file);
        }
    }
    return(
        <div className=' col-start-1 row-start-1 w-full sm:w-2/5 h-full pt-18 sm:pt-24 flex flex-col justify-start items-center gap-5 px-3 sm:px-0'>
            <div className="w-full px-5 sm:px-0 flex flex-col justify-start items-center gap-3">
                <p className='font-in font-bold text-2xl sm:text-4xl text-neutral-50  text-center '>Your Journey to Coding Conf 2025 Starts Here!</p>
                <p className="text-neutral-300 font-in text-center">Secure your spot at next year's biggest coding conference.</p>
            </div>
            <form className={`xl:w-3/5  w-full flex flex-col justify-start items-baseline ${nValid || eValid || fValid || ghValid?'gap-2':'gap-4'}`} onSubmit={handleSubmit}>
                <div className="gap-1 flex flex-col w-full" >
                    <p className="text-neutral-50 font-in">Upload Avatar</p>
                    <div className="w-full flex flex-col justify-start items-baseline gap-0.5 ">
                        {
                            file?
                            (<div htmlFor='avatar' className="flex flex-col justify-center items-center gap-3 border-dashed border border-neutral-500 w-full sm:h-20 h-30 rounded-xl bg-neutral-500/10 backdrop-blur-xs hover:bg-neutral-500/30 hover:cursor-pointer focus:ring-2 focus:ring-neutral-300 outline-none  duration-200 " >
                                <div className='bg-neutral-500/10 backdrop-blur-xs overflow-hidden h-8 w-8 rounded-lg flex justify-center items-center'>
                                    <img className='w-full h-auto rounded-lg ' src={file}/>
                                </div>
                                <div className='flex justify-center items-center w-1/2 gap-2' >
                                    <button onClick={()=> setFile(null)} className='font-in text-neutral-500 text-[10px] w-1/2 py-0.5 rounded-sm bg-neutral-500/20 backdrop-blur-xs '>Remove image</button>
                                    <label htmlFor="avatar" className='w-1/2 py-0.5 rounded-sm text-center bg-neutral-500/20 backdrop-blur-xs'>
                                        <p className='font-in text-neutral-500 text-[10px]'>change image</p>
                                        <input type="file" name="avatar" id="avatar"   onChange={handleFileChange} className='hidden'/>
                                    </label>
                                </div>
                            </div>):
                            (
                        <label htmlFor='avatar' className="flex flex-col justify-center items-center border-dashed border border-neutral-500 w-full sm:h-20 h-30 rounded-xl bg-neutral-500/10 backdrop-blur-xs hover:bg-neutral-500/30 hover:cursor-pointer focus:ring-2 focus:ring-neutral-300 outline-none  duration-200 " >
                            <div className='bg-neutral-500/10 backdrop-blur-xs h-8 w-8 rounded-lg flex justify-center items-center'>
                                <img className='w-6 h-6' src={uploadIcon}/>
                            </div>
                            <p className='font-in text-neutral-500 text-sm '>Drag and drop or click to upload</p>
                            <input type="file" name="avatar" id="avatar"   onChange={e => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                    setFile(reader.result);};
                                    reader.readAsDataURL(file);
                                }
                                }}  className="hidden" />
                        </label>
                            )
                        }
                        {
                            fValid?
                            <p className="text-[10px] text-orange-700 font-in flex gap-0.5"><img className='w-3' src={infoIcon}/>{fValid}</p>:
                            <p className="text-[10px] text-neutral-500 font-in flex gap-0.5 "><img className='w-3' src={infoIcon}/> Upload your photo (JPG or PNG, max size: 500KB).</p>
                        }
                        
                    </div>
                </div>
                <div className="gap-1 flex flex-col w-full">
                    <label className="text-neutral-50 font-in "  htmlFor="name">Full Name</label>
                    <div>
                        <input type="text" name="name" id="name" className={`border text-neutral-300 font-in text-sm pl-2 ${nValid? 'border-orange-700': 'border-neutral-500'} w-full h-9 rounded-lg bg-neutral-500/10 backdrop-blur-xs  shadow-neutral-300 hover:bg-neutral-500/30 hover:cursor-pointer focus:ring-2 focus:ring-neutral-300 outline-none text-neutral-300  duration-200`} onChange={e=>setName(e.target.value)} />
                        {
                            nValid &&
                                <p className="text-[10px] text-orange-700 font-in flex gap-0.5"><img className='w-3' src={infoIcon}/>{nValid}</p>
                        }
                    </div>
                </div>
                <div className="gap-1 flex flex-col w-full">
                    <label className="text-neutral-50 font-in "  htmlFor="email">Email Address</label>
                    <div>
                        <input type="email" name="email" id="email" className={`border text-neutral-300 font-in text-sm pl-2 ${eValid? 'border-orange-700' : 'border-neutral-500'} w-full h-9 rounded-lg bg-neutral-500/10 backdrop-blur-xs hover:bg-neutral-500/30 hover:cursor-pointer focus:ring-2 focus:ring-neutral-300 outline-none  duration-200`}  placeholder="example@email.com" onChange={e=>setEmail(e.target.value)}  />
                        {
                            eValid &&
                                <p className="text-[10px] text-orange-700 font-in flex gap-0.5"><img className='w-3' src={infoIcon}/>{eValid}</p>
                        }
                    </div>
                </div>
                <div className="gap-1 flex flex-col w-full">
                    <label className="text-neutral-50 font-in "  htmlFor="github">GitHub Username</label>
                    <div>
                        <input onChange={e=>setGithubUser(e.target.value)} type="text" name="github" id="github" className={`border text-neutral-300 font-in text-sm pl-2 ${ghValid? 'border-orange-700' : 'border-neutral-500'}  w-full h-9 rounded-lg bg-neutral-500/10 backdrop-blur-xs hover:bg-neutral-500/30 hover:cursor-pointer focus:ring-2 focus:ring-neutral-300 outline-none   duration-200 `} placeholder="@yourusername"  />
                        {
                            ghValid && 
                                <p className="text-[10px] text-orange-700 font-in flex gap-0.5"><img className='w-3' src={infoIcon}/>{ghValid}</p>
                        }
                    </div>
                </div>
                <button type="submit" className="bg-orange-500 backdrop-blur-2xl w-full h-9 rounded-lg text-neutral-900 font-in font-extrabold text-sm hover:cursor-pointer">Generate My Ticket</button>
            </form>
        </div>
    )
}