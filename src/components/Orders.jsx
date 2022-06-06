import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import Order from "./Order";
import { collection, getDocs ,orderBy,query} from "firebase/firestore";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const colRef = collection(db, "users", user?.uid, "orders") 
      const q = query(colRef, orderBy("created", "desc"))
      getDocs(q).then((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);



  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>

        <div className="orders__order">
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
