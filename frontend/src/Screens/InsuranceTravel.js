import React, { useEffect, useState } from 'react';

function InsuranceTravel(props) {
    const [packageList, setPackageList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("/api/packages")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setPackageList(result);
            
            }
            ,
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
    }, [])

    const [step, setStep] = useState(0);
    const [tel, setTel] = useState('0899999999');

    useEffect(() => {
        
    }, [step])

    const handleClick = () => {
        setStep(step+1);
    };

    const getOTP = () => {
        setTel(document.getElementById("input-tel").value);
        document.getElementById("button-otp").style.display = "none";
        document.getElementById("input-tel").disabled = true;
        document.getElementById("input-otp").style.display = "inline-block";
        document.getElementById("button-confirm").style.display = "inline-block";
    };

    

    switch (step) {
        case 1:
            return (
                <div className="packageTravel" style={{textAlign:"center"}}>
                    <div>
                        <h2 className="package-title">รับสิทธิประกันคุ้มครองง่ายๆใน 4 ขั้นตอน</h2>
                    </div>
                    <div>
                        <div className="steps">
                            <li className="steps-card">
                            <div className="steps-block">
                                <div className="step1"></div>
                                <div>ตรวจสอบ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}>
                            </div>
                            <div className="steps-block">
                                <div className="step2" style={{backgroundColor: "white"}}></div>
                                <div>เลือกแพ็กเกจ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}></div>
                            <div className="steps-block">
                                <div className="step3" style={{backgroundColor: "white"}}></div>
                                <div>ใส่หมายเลขบัตรประชาชน</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}></div>
                            <div className="steps-block">
                                <div className="step4" style={{backgroundColor: "white"}}></div>
                                <div>รอรับ SMS</div>
                            </div>
                            </li>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="packages">
                            <li className="package-block-step">
                                <div className="step-body">
                                    <div className="step-block" >
                                        <p>กรอกเบอร์ดีแทค 10 หลัก แล้วรับรหัสผ่านทาง sms</p>
                                        <div style={{padding:"1rem"}}>
                                            <input id="input-tel" type="textbox" className="input-tel" placeholder="เบอร์โทร"></input>
                                        </div>                                        
                                        <div id="button-otp" className="package-button" style={{padding:"2rem"}}>
                                            <button onClick={getOTP} style={{width:"50%"}}>รับรหัสผ่าน</button>
                                        </div>
                                        <div style={{padding:"1rem"}}>
                                            <input id="input-otp" type="textbox" className="input-tel" placeholder="กรอกรหัสผ่านที่ได้จาก SMS" style={{display:"none"}}></input>
                                        </div>                                        
                                        <div className="package-button" style={{padding:"2rem"}}>
                                            <button id="button-confirm" onClick={handleClick} style={{width:"50%",display:"none"}}>กดยืนยัน</button>
                                        </div>
                                    </div>                                     
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="packageTravel" style={{textAlign:"center"}}>
                    <div>
                        <h2 className="package-title">รับสิทธิประกันคุ้มครองง่ายๆใน 4 ขั้นตอน</h2>
                    </div>
                    <div>
                        <div className="steps">
                            <li className="steps-card">
                            <div className="steps-block">
                                <div className="step1"></div>
                                <div>ตรวจสอบ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}>
                            </div>
                            <div className="steps-block">
                                <div className="step2" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>เลือกแพ็กเกจ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}></div>
                            <div className="steps-block">
                                <div className="step3" style={{backgroundColor: "white"}}></div>
                                <div>ใส่หมายเลขบัตรประชาชน</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}></div>
                            <div className="steps-block">
                                <div className="step4" style={{backgroundColor: "white"}}></div>
                                <div>รอรับ SMS</div>
                            </div>
                            </li>
                        </div>
                    </div>
                    <div className="content">
                    <ul className="packages">
                            {packageList.map(item => {
                                return item.insuranceFlag ? 
                                <li className="package-block">
                                <div className="package">
                                    <div>
                                        <h3 className="package-title">{item.title}</h3>
                                    </div>    
                                            
                                    <ul className="package-body">
                                        <li className="package-price">
                                            <div className="price-number">{item.price}</div>
                                            <div>บาท</div>
                                        </li>  
                                        <li className="package-detail">
                                            <div>
                                                <img src="/images/icon-internet.png" className="icon-net" />                                
                                                <span className="net-number">{item.data} MB</span>                                
                                            </div>
                                            <div>
                                                <img src="/images/icon-day.png" className="icon-net" />                                
                                                <span className="day-number">{item.day} วัน</span>                                
                                            </div>
                                        </li>                       
                                    </ul>
                                    <div>
                                        <h4 className="package-title">ฟรี! ประกันอุบัติเหตุส่วนบุคคล 7 วัน จากซันเดย์</h4>
                                        <h5 className="package-title">สมัครกด *492*หมายเลขบัตรประชาชน13หลัก#<img src="/images/icon-phone.png" className="icon-phone" ></img></h5>
                                        <h5 className="package-title package-example">ตัวอย่าง *492*31000001212#<br/>*ลูกค้าซิมดีแทคพม่ากรุณาใส่หมายเลขบัตรชมพูแทนหมายเลขบัตรประชาชน 13 หลัก</h5>
                                        <h5 className="package-title">เงื่อนไข</h5>
                                        <ul className="package-rule">
                                            <li><h5>ราคายังไม่รวมภาษีมูลค่าเพิ่ม</h5></li>
                                            <li><h5>แพ็กเกจเสริมอินเทอร์เน็ต {item.data} Mb 1 วัน</h5></li>
                                            <li><h5>ประกันอุบัติเหตุส่วนบุคคลคุ้มครอง {item.day} วัน</h5></li>
                                            <li><h5>คุ้มครองสูงสุด 100,000 บาท</h5></li>
                                        </ul>
                                        <h5 className="package-title package-example">*โปรดศึกษาเงื่อนไขในการคุ้มครองกรมธรรม์ฉบับเต็ม<br/>*ผู้ใช้บริการยินยอมให้ข้อมูลเลขบัตรประชาชนหรือเลขบัตรชมพูและข้อมูลอื่นๆ ที่จำเป็นกับบมจ.เคเอสเค ประกันภัย (ประเทศไทย) ในการรับสิทธิประโยชน์ประกันภัย</h5>
                                    </div>
                                    <div className="package-button">
                                        <button onClick={handleClick}>สมัครแพ็กเกจ</button>
                                    </div>
                                </div> 
                            </li>
                            :
                            <div></div>
                            })}                                               
                        </ul>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="packageTravel" style={{textAlign:"center"}}>
                    <div>
                        <h2 className="package-title">รับสิทธิประกันคุ้มครองง่ายๆใน 4 ขั้นตอน</h2>
                    </div>
                    <div>
                        <div className="steps">
                            <li className="steps-card">
                            <div className="steps-block">
                                <div className="step1"></div>
                                <div>ตรวจสอบ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}>
                            </div>
                            <div className="steps-block">
                                <div className="step2" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>เลือกแพ็กเกจ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}></div>
                            <div className="steps-block">
                                <div className="step3" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>ใส่หมายเลขบัตรประชาชน</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "white"}}></div>
                            <div className="steps-block">
                                <div className="step4" style={{backgroundColor: "white"}}></div>
                                <div>รอรับ SMS</div>
                            </div>
                            </li>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="packages">
                            <li className="package-block-step">
                                <div className="step-body">
                                    <div className="step-block" style={{textAlign:"left"}}>
                                        <p style={{color:"gray"}}>หมายเลขของคุณ</p>
                                        <h2 style={{color:"#1cb0ed"}}>{tel}</h2>
                                        <h5>กรอกบัตรประชาชนและวันเดือนปีที่ใช้ในการเดินทาง</h5>
                                        <div style={{padding:"1rem"}}>
                                            <input type="textbox" className="input-no" placeholder="หมายเลขบัตรประชาชน 13 หลัก"></input>
                                        </div>   
                                        <div style={{padding:"1rem"}}>
                                            <input type="date" className="input-no"></input>
                                        </div>                                                                          
                                        <div className="package-button" style={{padding:"2rem"}}>
                                            <button id="button-confirm" onClick={handleClick} style={{width:"50%"}}>กดยืนยัน</button>
                                        </div>
                                    </div>                                     
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className="packageTravel" style={{textAlign:"center"}}>
                    <div>
                        <h2 className="package-title">รับสิทธิประกันคุ้มครองง่ายๆใน 4 ขั้นตอน</h2>
                    </div>
                    <div>
                        <div className="steps">
                            <li className="steps-card">
                            <div className="steps-block">
                                <div className="step1"></div>
                                <div>ตรวจสอบ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}>
                            </div>
                            <div className="steps-block">
                                <div className="step2" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>เลือกแพ็กเกจ</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}></div>
                            <div className="steps-block">
                                <div className="step3" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>ใส่หมายเลขบัตรประชาชน</div>
                            </div>
                            <div className="steps-line" style={{backgroundColor: "#1cb0ed"}}></div>
                            <div className="steps-block">
                                <div className="step4" style={{backgroundColor: "#1cb0ed"}}></div>
                                <div>รอรับ SMS</div>
                            </div>
                            </li>
                        </div>
                    </div>
                    <div className="content">
                        <ul className="packages">
                            <li className="package-block-step">
                                <div className="step-body">
                                    <div className="step-block" style={{textAlign:"center"}} >
                                        <div style={{display:"inline-block"}}>
                                            <div className="icon-wait"></div>
                                        </div>                                        
                                        <p style={{color:"green",fontSize:"2rem"}}>คุณทำรายการเรียบร้อยแล้วค่ะ</p>       
                                        <p>ระบบจะยืนยันการสมัครแพ็กเกจและแจ้งหมายเลขกรรมธรรม์ให้กับท่านทาง SMS</p>
                                        <a href="">ย้อนกลับ</a>      
                                    </div>                                     
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        default:
            return (
                <div className="packageTravel">
                    <div className="content">
                        <ul className="packages">
                            {packageList.map(item => {
                                return item.insuranceFlag ? 
                                <li className="package-block">
                                <div className="package">
                                    <div>
                                        <h3 className="package-title">{item.title}</h3>
                                    </div>    
                                            
                                    <ul className="package-body">
                                        <li className="package-price">
                                            <div className="price-number">{item.price}</div>
                                            <div>บาท</div>
                                        </li>  
                                        <li className="package-detail">
                                            <div>
                                                <img src="/images/icon-internet.png" className="icon-net" />                                
                                                <span className="net-number">{item.data} MB</span>                                
                                            </div>
                                            <div>
                                                <img src="/images/icon-day.png" className="icon-net" />                                
                                                <span className="day-number">{item.day} วัน</span>                                
                                            </div>
                                        </li>                       
                                    </ul>
                                    <div>
                                        <h4 className="package-title">ฟรี! ประกันอุบัติเหตุส่วนบุคคล 7 วัน จากซันเดย์</h4>
                                        <h5 className="package-title">สมัครกด *492*หมายเลขบัตรประชาชน13หลัก#<img src="/images/icon-phone.png" className="icon-phone" ></img></h5>
                                        <h5 className="package-title package-example">ตัวอย่าง *492*31000001212#<br/>*ลูกค้าซิมดีแทคพม่ากรุณาใส่หมายเลขบัตรชมพูแทนหมายเลขบัตรประชาชน 13 หลัก</h5>
                                        <h5 className="package-title">เงื่อนไข</h5>
                                        <ul className="package-rule">
                                            <li><h5>ราคายังไม่รวมภาษีมูลค่าเพิ่ม</h5></li>
                                            <li><h5>แพ็กเกจเสริมอินเทอร์เน็ต {item.data} Mb 1 วัน</h5></li>
                                            <li><h5>ประกันอุบัติเหตุส่วนบุคคลคุ้มครอง {item.day} วัน</h5></li>
                                            <li><h5>คุ้มครองสูงสุด 100,000 บาท</h5></li>
                                        </ul>
                                        <h5 className="package-title package-example">*โปรดศึกษาเงื่อนไขในการคุ้มครองกรมธรรม์ฉบับเต็ม<br/>*ผู้ใช้บริการยินยอมให้ข้อมูลเลขบัตรประชาชนหรือเลขบัตรชมพูและข้อมูลอื่นๆ ที่จำเป็นกับบมจ.เคเอสเค ประกันภัย (ประเทศไทย) ในการรับสิทธิประโยชน์ประกันภัย</h5>
                                    </div>
                                    <div className="package-button">
                                        <button onClick={handleClick}>สมัครแพ็กเกจ</button>
                                    </div>
                                </div> 
                            </li>
                            :
                            <div></div>
                            })}                                               
                        </ul>
                    </div>
                </div>
            );
    }
}

export default InsuranceTravel