import React from "react";
import "./CheckoutCard.scss";

const CheckoutCard = () => {
  return (
    <div id="main">
      <div id="left">
        <div id="head">
          <h1>Life has great moments</h1>
          <p>Enjoy them with music!</p>
        </div>
        <h3>Only 9.99$</h3>
      </div>
      <div id="right">
        <h1>Purchase</h1>
        <form action="#">
          <div id="form-card" className="form-field">
            <label htmlFor="cc-number">Card number:</label>
            <input
              id="cc-number"
              maxLength={19}
              placeholder="1111 2222 3333 4444"
              required
            />
          </div>

          <div id="form-date" className="form-field">
            <label htmlFor="expiry-month">Expiry date:</label>
            <div id="date-val">
              <select id="expiry-month" required>
                <option id="trans-label_month" value="" selected>
                  Month
                </option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select id="expiry-year" required>
                <option id="trans-label_year" value="" selected>
                  Year
                </option>
                <option value="2018">18</option>
                <option value="2019">19</option>
                <option value="2020">20</option>
                <option value="2021">21</option>
                <option value="2022">22</option>
                <option value="2023">23</option>
                <option value="2024">24</option>
                <option value="2025">25</option>
                <option value="2026">26</option>
                <option value="2027">27</option>
                <option value="2028">28</option>
                <option value="2029">29</option>
                <option value="2030">30</option>
                <option value="2031">31</option>
                <option value="2032">32</option>
                <option value="2033">33</option>
                <option value="2034">34</option>
                <option value="2035">35</option>
                <option value="2036">36</option>
                <option value="2037">37</option>
                <option value="2038">38</option>
                <option value="2039">39</option>
                <option value="2040">40</option>
                <option value="2041">41</option>
                <option value="2042">42</option>
                <option value="2043">43</option>
                <option value="2044">44</option>
                <option value="2045">45</option>
                <option value="2046">46</option>
                <option value="2047">47</option>
              </select>
            </div>
          </div>

          <div id="form-sec-code" className="form-field">
            <label htmlFor="sec-code">Security code:</label>
            <input type="password" maxLength={3} placeholder="123" required />
          </div>

          <button type="submit">Purchase Premium</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutCard;
