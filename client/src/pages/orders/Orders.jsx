import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { foundry } from 'viem/chains'

const account = privateKeyToAccount('0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d')
const transport = http('http://127.0.0.1:8545')
const client = createWalletClient({
  account,
  chain: foundry,
  transport
})


const Orders = () => {

  async function sendByt(addr, amount) {


    const hash = await client.sendTransaction({
      account,
      to: addr,
      value: parseEther(amount)
    })
    console.log("calişti")

  }



  return (
    <div className="orders">

      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Freeleancer Name</th>
            <th>Title</th>
            <th>Price</th>
            <th>work delivery</th>
          </tr>

          <tr >
            <td>
              burak3
            </td>
            <td>Gig 4 Title</td>
            <td>151</td>
            <td>
              <button onClick={() => sendByt("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", '151')}>
                <img
                  className="message"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_-FeMUEwVpci5zBFjtR6SK0MXZ9umfFtBg&usqp=CAU"
                  alt=""
                />
              </button>
            </td>
          </tr>

        </table>
      </div>

    </div>
  );
};

export default Orders;
