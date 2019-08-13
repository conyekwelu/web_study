# Collins, Pincus and Xie (1999)

### Purpose:

Investigate and try to provide an explanation for the anomalous negative coefficient on earnings in the simple earnings capitalization model for loss firms

### Tension:

Two prior explanations on the role of book value in the price - earnings specification

- econometric scaling variable (Barth and Kallapur 1996)
- economically value relevant factor
  1. proxy for expected future normal earnings (Ohlson 1995)
  2. proxy for adaptation  (Burgsthaler Dichev 1997) or abandonment (Berger et al 1996, Barth et al 1996) value

### Conclusion / Contribution:

Book value plays both roles. It serves as a proxy for future expected normal earnings for loss firms in general and as a proxy for abandonment value for `loss firms most likely to cease operations and liquidate.` 

The relative importance of the two roles depends on whether the firm is more likely to survive or cease operations and liquidate. 

Omitting the book value of equity in the simple earnings capitalization model induces a downward bias in the earnings coefficient for loss firms and upward bias for profit firms.

### Testing:

**Step 1:** Confirm that the price - earnings relation is negative as in Jan and Ou (1995) with the model
$$
P_t = \alpha + \beta X_t + \epsilon_t
$$
where P is the Price per share at time, t and X represents the income per share available to ordinary shareholders

**Step 2:** Test if the book value of equity is a correlated omitted variable
$$
P_t = \alpha + \beta X_t + \gamma BV_{t-1} + \epsilon_t
$$
where BV is the book value per share, but measured at the beginning of the period

**Step 3:** evaluate the relative importance of book value 's valuation role between profit and loss firms
$$
P_t = \alpha + \beta X_t + \gamma BV_{t-1} + a D_t + b D_t * X_t + c D_t * BV_{t-1} + \epsilon_t
$$
where D is an indicator variable for profitable firm-years (i.e. is 1 if X >= 0 )

**Step 4:** assess the alternative roles of book value. subsample includes two types of firms (using *ex poste* i.e. assumed perfect foresight)

* surviving firms - ten years of data after initial loss
* failed firms - go bankrupt within 2 years of reporting a loss

$$
P_t = a_0 + a_1 X_t + a_2 FUTX_t + a_3 EXITV_t + \epsilon_t
$$

where FUTX = opening book value * estimated firm cost of equity capital (using CAPM) and EXITV is calculated using the exit value equation in Berger et al (1996) as:
$$
EXITV_t = 1.0 Cash_t + 1.0Marketable Securities_t + 0.72 Receivables_t + 0.55 Inventory_t + 0.54 Fixed Assets_t - 1.0 Payables_t - 1.0 Total Debt_t
$$


