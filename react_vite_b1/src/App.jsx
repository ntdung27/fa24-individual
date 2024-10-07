import { useEffect, useState } from "react";
import "./App.css";
import ShowStudent from "./components/ShowStudent";

function App() {
  // -----------STATE
  const [color, setColor] = useState("purple");
  const handleClick = () => {
    setColor("gray");
  };
  // -----------COMPONENTS
  const student = {
    fullname: "Nguyen Thuy Dung",
    age: 20,
    address: "Quang Ninh",
    isMarried: false,
  };
  // --------------FILTER
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "todo1",
    },
    {
      id: 2,
      title: "todo2",
    },
    {
      id: 3,
      title: "todo3",
    },
  ]);
  // -------------PRACTICING
  const [products, setProducts] = useState([
    {
      id: 1,
      namePro: "Product 1",
      price: 1000,
      description: "This is the description's product 1",
      status: true,
    },
    {
      id: 2,
      namePro: "Product 2",
      price: 2000,
      description: "This is the description's product 2",
      status: true,
    },
    {
      id: 3,
      namePro: "Product 3",
      price: 3000,
      description: "This is the description's product 3",
      status: false,
    },
  ]);

  const removeProducts = (id) => {
    setProducts(products.filter((items) => items.id !== id));
    console.log(id);
  };
  // --------------------------------INSERT PRODUCTS------------------
  const [product, setProduct] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    if (!product) return;
    setProducts([...products, { id: products.length + 1, ...product }]);
  };
  // --------------------------------UPDATE PRODUCTS------------------
  const onChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // -------------------------------useEffect-------------------------
  const [pro, setPro] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setPro(data));
  }, []);
  // -------------RETURN-----------
  return (
    <>
      {/* ------------TRUYỀN THAM SỐ CHO 1 COMPONENT */}
      <ShowStudent student={student}></ShowStudent>
      <hr />
      <h2>useState</h2>
      <div>
        <button onClick={handleClick}>Change Color</button>
        <div
          style={{ background: color, width: 100, height: 100, color: "white" }}
        >
          Content
        </div>
      </div>
      <hr />
      {/* ------------------TODOS--------------------- */}
      <h2>TODO FORM</h2>
      <ul>
        {todos.map((items) => (
          <li key={items.id}>
            {items.title}
            <button
              onClick={() =>
                setTodos(todos.filter((todo) => todo.id !== items.id))
              }
            >
              Remove this todo
            </button>
          </li>
        ))}
      </ul>
      <hr />
      {/* -----------------FORM CRUD PRODUCTS------------------- */}
      <h2>FORM ADD, DELETE PRODUCTS</h2>
      {/* {JSON.stringify(products)} */}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="namePro" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input type="number" name="price" onChange={onChange} />
        </div>
        <div>
          <input type="radio" name="status" value={true} onChange={onChange} />{" "}
          Còn hàng
          <input
            type="radio"
            name="status"
            value={false}
            onChange={onChange}
          />{" "}
          Hết hàng
        </div>

        <button>Thêm</button>
      </form>
      <table>
        <thead>
          <th>#</th>
          <th>Name Product</th>
          <th>Price</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          {products.map((items, index) => (
            <tr key={items.id}>
              <td>{index + 1}</td>
              <td>{items.namePro}</td>
              <td>{items.price}</td>
              <td>{items.description}</td>
              <td>{items.status ? "Instock" : "Outstock"}</td>
              <td>
                <button onClick={() => removeProducts(items.id)}>
                  Remove Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ------------------------USE EFFECT------------------ */}
      <hr />
      <h2>useEffect</h2>
      {pro.map((items) => (
        <div className="" key={items.id}>
          {items.name}
        </div>
      ))}
    </>
  );
}

export default App;
