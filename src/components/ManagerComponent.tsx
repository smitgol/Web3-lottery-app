import React, { useContext, useEffect, useState } from "react"
import { Box, Typography, Card, CardContent, Button  } from "@mui/material";
import ConnectWalletCom from "./connectWalletCom";
import { wallet } from "../context/Context";
import { ethers } from "ethers";
import { smart_contract_address } from "../config";
import abi from "../contract.json"

declare var window: any

const ManagerComponent:React.FC = ()=> {
    const {walletAddress, setAlert} = useContext(wallet)
    const [totalUser, setTotalUser] = useState<number>(0)
    const [balance, setBalance] = useState<string>("")
    const [isManager, setIsManager] = useState<boolean>(true)

    const ContractConstructor = (ethereum:object) => {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const lotteryContract = new ethers.Contract(smart_contract_address, abi.abi, signer)
        return lotteryContract
    }

    const getContractDetails = async() => {
        try {
            if (walletAddress != "") {
                const {ethereum} = window
                if (ethereum) {
                    let lotteryContract = ContractConstructor(ethereum)
                    const manager_address = await lotteryContract.manager_address()
                    
                    if (walletAddress === manager_address.toLowerCase()) {
                        const total_users = await lotteryContract.totalUser()
                        const balance = await lotteryContract.getBalance()
                        setTotalUser(total_users.toNumber())
                        setBalance(ethers.utils.formatEther(balance))
                        setIsManager(true)
                    }
                    else {
                        setIsManager(false)
                    }
                }
            }
        }
        catch(error) {
            setAlert({open: true, message:"some error occured", type:"error"})
        }
    }

    const endLottery = async() => {
        try {
            const {ethereum} = window
                if (ethereum) {
                    let lotteryContract = ContractConstructor(ethereum)
                    let winner = await lotteryContract.declareWinner({ gasLimit: 300000 })
                    await winner.wait()
                    setAlert({
                        open: true,
                        message: "Money Transfer to Winner",
                        type: "success",
                      })
                }
        }
        catch(error) {
            setAlert({open: true, message:"some error occurred", type:"error"})
        }
    }
    useEffect(()=> {
        getContractDetails()
    }, [walletAddress])
    return <Box sx={{ position: "relative"}}>
        <Box sx={{ marginTop: "100px", display: "flex", flexDirection: "column", gap: "48px", filter: `blur(${walletAddress === "" || isManager==false ? '6' : '0'}px)` }} >
            <Typography variant="h4" sx={{ textAlign: "center",}}>User Statistics</Typography>
            <Box sx={{ display:"flex", alignItems: "center", justifyContent: "center", gap: "48px"}}>
            <Card sx={{ width: 170, margin:0 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "8px"}}>
                    <Typography variant="h6">Total User</Typography>
                    <Typography variant="h6">{totalUser}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 170, margin:0 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "8px"}}>
                    <Typography variant="h6">Balance</Typography>
                    <Typography variant="h6">{balance} ether</Typography>
                </CardContent>
            </Card>
            </Box>
            {totalUser > 3 && <Button variant="contained" color="error" sx={{ margin: 'auto'}} onClick={()=> {endLottery()}}>End this Lottery</Button>}
        </Box>
        {walletAddress === "" || isManager==false ? <Box sx={{ position: "absolute", top: "100px", left: "50%", transform: 'translateX(-50%)', display: "flex", flexDirection: "column", gap: "24px"}}>
            <Typography variant="h5" sx={{ fontWeight: 700}}>{isManager==false ? "try to login with manager wallet" :"Login to see Statistics and end lottery"}</Typography>
            <ConnectWalletCom />
        </Box> : ""}
    </Box>
}

export default ManagerComponent;