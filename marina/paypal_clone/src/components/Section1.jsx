export default function Section1({}) {
  return (
    <div className="section-1">
      <h2 class="section-1-top-heading">
        PayPal is for everyone who pays or gets paid.
      </h2>
      <ul className="section-1-panel">
        <li>
          <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/woman_side_icon.jpeg" />
          <h3>Individuals</h3>
          <p>
            Find out why we have more than 200M active
            <br></br> accounts worldwide.
          </p>
          <button class="section-1-btn learnmore-btn learnmore">
            Learn More
          </button>
        </li>
        <li>
          <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/pos_machine_icon.jpeg" />
          <h3>Businesses</h3>
          <p>
            Join more than 7 million businesses around the
            <br></br> world offering PayPal.
          </p>
          <button class="section-1-btn learnmore-btn learnmore">
            Learn More
          </button>
        </li>
        <li>
          <img src="https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/shopping_bag_icon.jpeg" />
          <h3>Partners and developers</h3>
          <p>
            Work with PayPal to offer your customers world class
            <br></br>payment solutions.
          </p>
          <button class="section-1-btn learnmore-btn learnmore">
            Learn More
          </button>
        </li>
      </ul>
    </div>
  );
}
