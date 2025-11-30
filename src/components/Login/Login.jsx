import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const styles = `
      .liq-login-root {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 1rem;
        background: radial-gradient(circle at 10% 10%, rgba(201,181,156,0.06), transparent 10%),
                    linear-gradient(180deg, #F7F5F3 0%, #EFE9E3 100%);
      }

      .liq-card {
        width: 720px;
        max-width: 95%;
        border-radius: 14px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 420px;
        gap: 0;
        box-shadow: 0 18px 40px rgba(15,14,14,0.12);
        border: 1px solid rgba(0,0,0,0.04);
      }

      /* Left panel (visual) */
      .liq-left {
        background: linear-gradient(180deg, rgba(196,179,155,0.12), rgba(201,181,156,0.06));
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .liq-badge {
        width: 84px;
        height: 84px;
        border-radius: 50%;
        background: linear-gradient(135deg, #C9B59C, #A88E6E);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 900;
        font-size: 28px;
        box-shadow: 0 8px 20px rgba(168,142,110,0.18);
        margin-bottom: 1rem;
      }

      .liq-left h3 {
        margin: 0;
        font-size: 1.25rem;
        color: #3b342f;
        font-weight: 800;
        margin-bottom: 0.35rem;
      }

      .liq-left p {
        margin: 0;
        color: #5f564f;
        font-size: 0.95rem;
        text-align: center;
        max-width: 220px;
        line-height: 1.4;
      }

      /* Right panel (form) */
      .liq-right {
        background: #F9F8F6;
        padding: 2rem 2.25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .liq-header {
        text-align: left;
        margin-bottom: 1rem;
      }

      .liq-header h2 {
        margin: 0;
        font-size: 1.6rem;
        color: #3b342f;
        letter-spacing: -0.2px;
      }

      .liq-header .sub {
        margin-top: 6px;
        color: #7d746b;
        font-size: 0.95rem;
      }

      .liq-form-row {
        margin-bottom: 1rem;
      }

      .liq-label {
        display: block;
        margin-bottom: 0.45rem;
        font-weight: 600;
        color: #4b443d;
        font-size: 0.95rem;
      }

      .liq-input {
        width: 100%;
        padding: 12px 14px;
        border-radius: 10px;
        border: 1px solid #D9CFC7;
        background-color: #fff;
        font-size: 1rem;
        color: #3b342f;
        outline: none;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
        transition: box-shadow 160ms ease, transform 160ms ease;
      }

      .liq-input:focus {
        box-shadow: 0 8px 20px rgba(59,52,47,0.06);
        transform: translateY(-1px);
        border-color: #C9B59C;
      }

      .liq-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 1.25rem;
      }

      .liq-remember {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #5f564f;
        font-weight: 500;
        font-size: 0.95rem;
      }

      .liq-forgot {
        color: #A8845F;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
      }

      .liq-login-btn {
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        background: linear-gradient(90deg, #A8845F, #B89F7F);
        border: none;
        color: #fff;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: 0 10px 24px rgba(168,132,95,0.18);
      }

      .liq-alt-actions {
        margin-top: 1rem;
        display: flex;
        gap: 10px;
        justify-content: center;
      }

      .liq-social {
        flex: 1;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #E6DDD0;
        background: #fff;
        color: #4b443d;
        font-weight: 600;
        cursor: pointer;
      }

      .liq-footer {
        margin-top: 1.1rem;
        text-align: center;
        font-size: 0.9rem;
        color: #7d746b;
      }

      @media (max-width: 880px) {
        .liq-card {
          grid-template-columns: 1fr;
        }
        .liq-left {
          padding: 1.25rem 1rem;
        }
        .liq-right {
          padding: 1.25rem 1rem;
        }
        .liq-badge { width: 68px; height: 68px; font-size: 22px; }
      }
    `;

    const tag = document.createElement("style");
    tag.setAttribute("data-liq-login", "true");
    tag.innerHTML = styles;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div className="liq-login-root">
      <Card className="liq-card">
        <div className="liq-left">
          <div className="liq-badge">LiQr</div>
          <h3>Welcome back</h3>
        </div>

        <div className="liq-right">
          <div className="liq-header">
            <h2>Admin Login</h2>
            
          </div>

          <div className="liq-form-row">
            <label className="liq-label">E-mail</label>
            <input className="liq-input" type="email" placeholder="admin@liqr.com" />
          </div>

          <div className="liq-form-row">
            <label className="liq-label">Password</label>
            <div style={{ position: "relative" }}>
              <input
                className="liq-input"
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                style={{ paddingRight: "96px" }}
              />
              <button
                onClick={() => setShowPass((s) => !s)}
                type="button"
                style={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  height: "calc(100% - 16px)",
                  padding: "0 12px",
                  borderRadius: 8,
                  border: "none",
                  background: "transparent",
                  color: "#8b7760",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="liq-controls">
            <label className="liq-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((r) => !r)}
                style={{ width: 16, height: 16 }}
              />
              Remember me
            </label>

            <a className="liq-forgot" href="#forgot">
              Forgot password?
            </a>
          </div>

          <Button className="liq-login-btn">Login</Button>

          <div className="liq-alt-actions">
            <button className="liq-social">Sign in with Google</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default BasicExample;
