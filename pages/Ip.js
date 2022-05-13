import Head from 'next/head'
import Link from 'next/link'

import { useState, useEffect } from 'react';


export default function IP() {
    const [ipV4, setIpV4] = useState("192.168.10.1");
    const [validationIpV4, setvalidationIpV4] = useState(false);
    const [CIDR, setCIDR] = useState(24);
    const [validatiONCIDR, setvalidationCIDR] = useState(false);
    const [nbBitHotes, setNbBitHotes] = useState();
    const [nbHotes, setNbHotes] = useState();

    const [binaireCIDR1, setBinaireCIDR1] = useState();
    const [binaireCIDR2, setBinaireCIDR2] = useState();
    const [binaireCIDR3, setBinaireCIDR3] = useState();
    const [binaireCIDR4, setBinaireCIDR4] = useState();

    const [binaireIPV41, setBinaireIPV41] = useState();
    const [binaireIPV42, setBinaireIPV42] = useState();
    const [binaireIPV43, setBinaireIPV43] = useState();
    const [binaireIPV44, setBinaireIPV44] = useState();

    const arrayBinaireIpV4 = [];
    const arrayBinaireCIDR = [[], [], [], []];
    const arrayDecimalCIDR = [];

    const checkIp = (e) => {

        const checkIpReg = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g);
        const test1 = new RegExp(/\.$/g);

        setvalidationIpV4(checkIpReg.test(e.target.value));
        setIpV4(e.target.value);
        if (test1.test(e.target.value) === true) {
            setvalidationIpV4(false);
        }




        //console.log(binaireIPV41.length);


    }

    const checkCIDR = (e) => {

        const checkCIDR = new RegExp(/\b([0-9]|[12][0-9]|3[0-2])\b/g);

        setCIDR(e.target.value);

        setvalidationCIDR(checkCIDR.test(e.target.value));



    }
    useEffect(() => {
        setNbBitHotes(32 - CIDR)
        setNbHotes(Math.pow(2, nbBitHotes) - 2);

        const toto = [];
        for (let index = 0; index < 32; index++) {
            if (index < CIDR) {
                toto.push(1);
            } else {
                toto.push(0);
            }
        }

        setBinaireCIDR1(toto[0] + "" + toto[1] + toto[2] + toto[3] + toto[4] + toto[5] + toto[6] + toto[7])
        setBinaireCIDR2(toto[8] + "" + toto[9] + toto[10] + toto[11] + toto[12] + toto[13] + toto[14] + toto[15])
        setBinaireCIDR3(toto[16] + "" + toto[17] + toto[18] + toto[19] + toto[20] + toto[21] + toto[22] + toto[23])
        setBinaireCIDR4(toto[24] + "" + toto[25] + toto[26] + toto[27] + toto[28] + toto[29] + toto[30] + toto[31])

        arrayDecimalCIDR[0] = parseInt(arrayBinaireCIDR[0], 2);
        arrayDecimalCIDR[1] = parseInt(arrayBinaireCIDR[1], 2);
        arrayDecimalCIDR[2] = parseInt(arrayBinaireCIDR[2], 2);
        arrayDecimalCIDR[3] = parseInt(arrayBinaireCIDR[3], 2);





        //arrayBinaireIpV4 = [];
        const test = ipV4.split('.')
        test.map((binIpV4) => {
            arrayBinaireIpV4.push([parseInt(binIpV4).toString(2)]);

        })

        arrayBinaireIpV4.map((binIpV4, index) => {

            if (binIpV4[0].length < 8 && index == 0) {
                let number = 8 - binIpV4[0].length
                for (let index = 0; index < number; index++) {
                    binIpV4[0] = "0" + binIpV4[0]
                }

            }
            if (binIpV4[0].length < 8 && index == 1) {
                let number = 8 - binIpV4[0].length
                for (let index = 0; index < number; index++) {
                    binIpV4[0] = "0" + binIpV4[0]
                }

            }
            if (binIpV4[0].length < 8 && index == 2) {
                let number = 8 - binIpV4[0].length
                for (let index = 0; index < number; index++) {
                    binIpV4[0] = "0" + binIpV4[0]
                }
            }
            if (binIpV4[0].length < 8 && index == 3) {
                let number = 8 - binIpV4[0].length

                for (let index = 0; index < number; index++) {
                    binIpV4[0] = "0" + binIpV4[0]
                }

            }
            setBinaireIPV41(arrayBinaireIpV4[0])
            setBinaireIPV42(arrayBinaireIpV4[1])
            setBinaireIPV43(arrayBinaireIpV4[2])
            setBinaireIPV44(arrayBinaireIpV4[3])




        })


        /*
                for (let index = 0; index < arrayBinaireIpV4.length; index++) {
                    console.log(arrayBinaireIpV4[1])
        
                    for (let index = 0; index < arrayBinaireIpV4[1].length; index++) {
                        console.log(arrayBinaireIpV4)
        
                    }
        
                }*/
    }, [ipV4, CIDR]);


    const submitFormIpV4 = (e) => {
        e.preventDefault();

        const test = ipV4.split('.')
        const binaireCDIR = CIDR.split('.')

        test.map((binIpV4) => {

            arrayBinaireIpV4.push([parseInt(binIpV4).toString(2)]);

        })





    }

    const pepito = binaireIPV41 + binaireIPV42 + binaireIPV43 + binaireIPV44;
    const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
    console.log(pepito.toString().substring(CIDR));
    
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            </Head>


            <div class="d-flex justify-content-end">
                <nav aria-label="breadcrumb pe-2">
                    <ol class="breadcrumb">
                        <Link href={"/"}>
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                        </Link>
                        <li class="breadcrumb-item active" aria-current="page">Ipv4</li>
                    </ol>
                </nav>
            </div>

            <div className='container'>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below forhtml how you can remix and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button"> button</button>
                </div>

                <form className="row g-3" onSubmit={submitFormIpV4}>
                    <div className="col-md-6">
                        <label forhtml="inputEmail4" className="form-label">Ip v4</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder={ipV4} onChange={checkIp} />
                        <div id="emailHelp" class={"form-text " + (validationIpV4 == true ? 'text-success' : 'text-danger')}>
                            {(validationIpV4 == true ? "le format de l'adresse est  valide" : "le format de l'adresse n'est pas valide")}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label forhtml="inputPassword4" className="form-label">CIDR (Classless Inter-Domain Routing)</label>
                        <input type="number" min="0" className="form-control" id="inputPassword4" placeholder={CIDR} onChange={checkCIDR} />
                        <div id="emailHelp" class={"form-text " + (validatiONCIDR == true ? 'text-success' : 'text-danger')}>
                            {(validatiONCIDR == true ? "le format du " + validatiONCIDR + "CIDR est  valide" : "le format du CIDR n'est pas valide")}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" class={"btn btn-primary " + (validatiONCIDR && validationIpV4 == true ? '' : 'disabled')}  >Envoyer</button>
                    </div>
                </form>

                <div className="row">
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Notation décimale</th>
                                <th scope="col">Notation binaire</th>
                                <th scope="col">Notation CIDR</th>
                                <th scope="col">Nombre de bit pour hôtes</th>
                                <th scope="col">Hôtes possibles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>

                                <td>
                                    {parseInt(binaireCIDR1, 2)}.{parseInt(binaireCIDR2, 2)}.{parseInt(binaireCIDR3, 2)}.{parseInt(binaireCIDR4, 2)}

                                </td>
                                <td>{binaireCIDR1}.{binaireCIDR2}.{binaireCIDR3}.{binaireCIDR4}</td>
                                <td className='text-cnter'>/{CIDR}</td>
                                <td>{nbBitHotes}</td>
                                <td>{nbHotes}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">Adresse Réseau</th>
                                <th scope="col">CIDR</th>
                                <th scope="col">Notation CIDR</th>
                                <th scope="col">Nombre de bit pour hôtes</th>
                                <th scope="col">Hôtes possibles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>

                                <td> {binaireIPV41}.{binaireIPV42}.{binaireIPV43}.{binaireIPV44}</td>
                                <td>/{CIDR}</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}