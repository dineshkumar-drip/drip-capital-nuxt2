<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Careers</span>
        <h1>Join our team.<br><em>Build the future of trade finance.</em></h1>
        <p>We are a team of engineers, analysts, and operators solving one of the biggest problems in global trade: access to working capital for growing businesses.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
          <span class="eyebrow">Why Drip Capital</span>
          <h2 class="section-title">A company worth building.</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <h3>Global Impact</h3>
            <p>We have funded over $9 billion in trade transactions, helping 11,000+ businesses across the world grow faster.</p>
          </div>
          <div class="why-card">
            <h3>World-Class Team</h3>
            <p>Our team includes alumni from Goldman Sachs, Y Combinator, and top engineering programs. We value curiosity and execution.</p>
          </div>
          <div class="why-card">
            <h3>Backed by Leaders</h3>
            <p>Funded by Barclays, IFC, SMBC, and top venture firms. We have the resources and partnerships to scale globally.</p>
          </div>
          <div class="why-card">
            <h3>Growth Stage</h3>
            <p>We are at an inflection point, scaling our US business rapidly while building technology that will define the next era of trade finance.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-bg">
      <div class="container" style="text-align: center; max-width: 600px;">
        <span class="eyebrow">Open Positions</span>
        <h2 class="section-title">Ready to make an impact?</h2>
        <p style="font-size: 17px; color: var(--body); line-height: 1.7; margin-bottom: 32px;">
          We are always looking for exceptional talent. If you are passionate about fintech, global trade, or building products that matter, we would love to hear from you.
        </p>
        <a href="mailto:careers@dripcapital.com" class="btn btn-primary btn-lg">Email Us at careers@dripcapital.com</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return { title: 'Careers | Drip Capital' }
  }
}
</script>

<style scoped>
.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.why-card {
  padding: 28px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.why-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}
.why-card p {
  font-size: 14px;
  color: var(--body);
  line-height: 1.6;
}
@media (max-width: 640px) {
  .why-grid { grid-template-columns: 1fr; }
}
</style>
