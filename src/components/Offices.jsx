import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="U.S.A" invert={invert}>
          on bay mark
          <br />
          Newtown city of Las Vegas
        </Office>
      </li>
      <li>
        <Office name="Sri Lanka" invert={invert}>
          Colombo 05
          <br />
          Borella ,Cotta Road
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
