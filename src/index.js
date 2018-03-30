import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const dataSet = {
  projects: [
    {
      JobName: "ESPN Bldg 13 - Safety Switches",
      ProjectManager: "Hammersmith, Ryan",
      ProjectManagerNumber: "30001326",
      CustomerName: "GEXPRO",
      CustomerNumber: "3393710",
      PurchaseOrderNumber: "S120096014",
      ExtendedInfo: "Standard 12/18",
      Inco1: "FCA",
      Inco2: "FCA Origin",
      totalCMValue: 1364784.3,
      totalSOValue: 5198198.050000001,
      Orders: [
        {
          SalesOrder: "151125516",
          JobName: "ESPN Bldg 13 - Swbd DPBA CP",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "GEXPRO",
          CustomerNumber: "3393710",
          CustomerContactInfo: "RYAN.HAMMERSMITH@GE.COM220010699",
          TotalAmount: "13985.24",
          Currency: "USD",
          PurchaseOrderNumber: "S120096014",
          OrderStatus: "Open",
          BillingBlock: "",
          DeliveryBlock: "26 No early delivery",
          ZxCmValue: "5033.29",
          IsProject: true
        }
      ]
    },
    {
      JobName: "M-13 US Embassy Main MV Gear",
      ProjectManager: "Hammersmith, Ryan",
      ProjectManagerNumber: "30001326",
      CustomerName: "GAFFNEY KROESE ELECTRIC",
      CustomerNumber: "3334602",
      PurchaseOrderNumber: "PO-418484",
      ExtendedInfo: "Standard 12/18",
      Inco1: "FCA",
      Inco2: "FCA Origin",
      totalCMValue: 1364784.3,
      totalSOValue: 5198198.050000001,
      Orders: [
        {
          SalesOrder: "151115428",
          JobName: "M-13 US Embassy Main MV Gear",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "GAFFNEY KROESE ELECTRIC",
          CustomerNumber: "3334602",
          CustomerContactInfo: "",
          TotalAmount: "97055.11",
          Currency: "USD",
          PurchaseOrderNumber: "PO-418484",
          OrderStatus: "On Hold",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "7764.41",
          IsProject: true
        },
        {
          SalesOrder: "151110523",
          JobName: "M-13 US Embassy - BUR Main Swg",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "GAFFNEY KROESE ELECTRIC",
          CustomerNumber: "3334602",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "227945.37",
          Currency: "USD",
          PurchaseOrderNumber: "PO-418484",
          OrderStatus: "On Hold",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "82032.98",
          IsProject: true
        },
        {
          SalesOrder: "151063464",
          JobName: "M-13 US Embassy - Busway",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "GAFFNEY KROESE ELECTRIC",
          CustomerNumber: "3334602",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "251699.29",
          Currency: "USD",
          PurchaseOrderNumber: "PO-418484",
          OrderStatus: "Open",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "72992.79",
          IsProject: true
        },
        {
          SalesOrder: "151062034",
          JobName: "M-13 US Embassy - BUR Ess & Ut",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "GAFFNEY KROESE ELECTRIC",
          CustomerNumber: "3334602",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "363430.48",
          Currency: "USD",
          PurchaseOrderNumber: "PO-418484",
          OrderStatus: "On Hold",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "90861.25",
          IsProject: true
        }
      ]
    },
    {
      JobName: "ESPN BLDG 13 - SERVICES",
      ProjectManager: "Hammersmith, Ryan",
      ProjectManagerNumber: "30001326",
      CustomerName: "ELECTRICAL WHOLESALERS INC",
      CustomerNumber: "7227501",
      PurchaseOrderNumber: "S108802241",
      ExtendedInfo: "Standard 12/18",
      Inco1: "FCA",
      Inco2: "FCA Origin",
      totalCMValue: 1364784.3,
      totalSOValue: 5198198.050000001,
      Orders: [
        {
          SalesOrder: "151002939",
          JobName: "ESPN Bldg 13 Houses",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "ELECTRICAL WHOLESALERS INC",
          CustomerNumber: "7227501",
          CustomerContactInfo: "",
          TotalAmount: "551726.00",
          Currency: "USD",
          PurchaseOrderNumber: "S108802241",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "54676.05",
          IsProject: true
        },
        {
          SalesOrder: "151002740",
          JobName: "ESPN Bldg 13",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "ELECTRICAL WHOLESALERS INC",
          CustomerNumber: "7227501",
          CustomerContactInfo: "",
          TotalAmount: "197169.08",
          Currency: "USD",
          PurchaseOrderNumber: "S108802241",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "15773.53",
          IsProject: true
        },
        {
          SalesOrder: "151001662",
          JobName: "ESPN B13 UPGRADE SS-13A/B",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "ELECTRICAL WHOLESALERS INC",
          CustomerNumber: "7227501",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "44000.00",
          Currency: "USD",
          PurchaseOrderNumber: "S108802241",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "18645.00",
          IsProject: true
        },
        {
          SalesOrder: "151001406",
          JobName: "ESPN B13 UPGRADE SS-13A/B",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "ELECTRICAL WHOLESALERS INC",
          CustomerNumber: "7227501",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "451075.19",
          Currency: "USD",
          PurchaseOrderNumber: "S108802241",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "170150.49",
          IsProject: true
        }
      ]
    },
    {
      JobName: "LOWELL JUSTICE CENTER",
      ProjectManager: "Hammersmith, Ryan",
      ProjectManagerNumber: "30001326",
      CustomerName: "NEEDHAM ELECTRIC SUPPLY CORPOR",
      CustomerNumber: "6550462",
      PurchaseOrderNumber: "S4392726",
      ExtendedInfo: "Standard 12/18",
      Inco1: "FCA",
      Inco2: "FCA Origin",
      totalCMValue: 1364784.3,
      totalSOValue: 5198198.050000001,
      Orders: [
        {
          SalesOrder: "151038066",
          JobName: "LOWELL JUSTICE CENTER",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "NEEDHAM ELECTRIC SUPPLY CORPOR",
          CustomerNumber: "6550462",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "20601.30",
          Currency: "USD",
          PurchaseOrderNumber: "S4392726",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "10106.59",
          IsProject: true
        },
        {
          SalesOrder: "150930471",
          JobName: "LOWELL JUSTICE CENTER",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "NEEDHAM ELECTRIC SUPPLY CORPOR",
          CustomerNumber: "6550462",
          CustomerContactInfo:
            "RYAN HAMMERSMITH 716 406 2372EMAIL1: RYAN.HAMMERSMITH@GE.COM",
          TotalAmount: "77912.56",
          Currency: "USD",
          PurchaseOrderNumber: "S4392726",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "27254.11",
          IsProject: true
        }
      ]
    },
    {
      JobName: "VERIZON PROVIDENCE",
      ProjectManager: "Hammersmith, Ryan",
      ProjectManagerNumber: "30001326",
      CustomerName: "NORTHEAST ELECTRICAL DISTRIBUT",
      CustomerNumber: "3033601",
      PurchaseOrderNumber: "S026771594",
      ExtendedInfo: "",
      Inco1: "FCA",
      Inco2: "FCA Origin",
      totalCMValue: 1364784.3,
      totalSOValue: 5198198.050000001,
      Orders: [
        {
          SalesOrder: "150919584",
          JobName: "VERIZON PROVIDENCE",
          ProjectManager: "30001326",
          ProjectManagerName: "Hammersmith, Ryan",
          CustomerName: "NORTHEAST ELECTRICAL DISTRIBUT",
          CustomerNumber: "3033601",
          CustomerContactInfo: "",
          TotalAmount: "1404.00",
          Currency: "USD",
          PurchaseOrderNumber: "S026771594",
          OrderStatus: "Shipped",
          BillingBlock: "",
          DeliveryBlock: "",
          ZxCmValue: "0",
          IsProject: true
        }
      ]
    }
  ],
  lastOrder: "150914165",
  count: 50
};

class App extends React.Component {
  state = {
    data: dataSet
  };
  changeFunc = props => {
    let newProp = { ...props, checked: !props.checked };
    for (let i in newProp.Orders) {
      newProp.Orders[i].checked = !newProp.Orders[i].checked;
    }
    const index = this.state.data.projects.findIndex(
      prop => prop.PurchaseOrderNumber === props.PurchaseOrderNumber
    );
    const newData = this.state.data;
    newData.projects[index] = newProp;
    console.log(newData);
    this.setState({ data: newData });
  };
  render() {
    const { data } = this.state;
    const projectStyle = {
      display: "flex",
      flexDirection: "row"
    };
    return (
      <div style={styles}>
        {data.projects.map(i => {
          return (
            <div style={projectStyle} key={i.PurchaseOrderNumber}>
              <div>PurchaseOrderNumber</div>
              <div>CustomerNumber</div>
              <ProjectRow
                {...i}
                divStyles={projectStyle}
                changeFunc={props => this.changeFunc(props)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const ProjectRow = props => {
  return (
    <div>
      <div style={props.divStyles}>
        <div>
          <button onClick={() => props.changeFunc(props)} />
        </div>
        <div
          style={
            props.checked
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "orange" }
          }
        >
          {props.PurchaseOrderNumber}
        </div>
        <div>{props.CustomerNumber}</div>
      </div>
      <div style={props.divStyles}>
        <div>SalesOrder</div>
        <div>OrderStatus</div>
      </div>
      <div>
        {props.Orders.map(i => {
          i["key"] = `${props.PurchaseOrderNumber}_${i.SalesOrder}`;
          //const d = { ...i, k };
          return <OrderRow key={i.key} {...i} />;
        })};
      </div>
    </div>
  );
};

const OrderRow = props => {
  console.log(props);
  return (
    <div>
      <tr>
        <td
          style={
            props.checked
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "orange" }
          }
        >
          {props.SalesOrder}
        </td>
        <td>{props.OrderStatus}</td>
      </tr>
    </div>
  );
};

render(<App />, document.getElementById("root"));
