import React from "react";
const allUsers = ["Michal", "Kasia", "Jacek", "Marta", "Tomek", "Ania"];
const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: [],
      filteredUsers: PRODUCTS,
      order: {
        category: "",
        price: "",
        stocked: true,
        name: ""
      }
    };
  }

  componentDidMount() {
    let newProduct = this.state.phone;
    newProduct = PRODUCTS.map(product => {
      return {
        category: product.category,
        price: product.price,
        stocked: product.stocked,
        name: product.name
      };
    });
    this.setState({
      phone: newProduct
    });
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    this.getFilteredUsersForText(text).then(filteredUsers => {
      this.setState({
        filteredUsers
      });
    });
  }

  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        let filteredUsers = PRODUCTS.filter(user =>
          user.category.toLowerCase().includes(text.toLowerCase())
        );
        resolve(filteredUsers);
      }, time);
    });
  }

  render() {
    // const aaa = this.state.phone.map(product => {
    //   return (
    //     <div>
    //       <p>{product.category}</p>
    //       <p>{product.price}</p>
    //       <p>{product.stocked}</p>
    //       <p>{product.name}</p>

    //     </div>
    //   );
    // });
    return (
      <div>
        {/* {aaa} */}
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => (
          <li key={user}>{user.category}</li>
        ))}
      </ul>
    );
  }

  return <p>No results!</p>;
};

export default App;
