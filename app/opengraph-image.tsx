import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Bold Parfum — Perfumes árabes, importados e fragrâncias premium";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050505 0%, #111111 55%, #1f1905 100%)",
          color: "#ffffff",
          padding: "70px 85px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-170px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "rgba(250, 204, 21, 0.08)",
            border: "2px solid rgba(250, 204, 21, 0.12)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-260px",
            left: "260px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background: "rgba(250, 204, 21, 0.04)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "720px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "25px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "7px",
              color: "#facc15",
            }}
          >
            Sua assinatura olfativa
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "25px",
              fontSize: "78px",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-3px",
            }}
          >
            Bold Parfum
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "27px",
              maxWidth: "680px",
              fontSize: "31px",
              lineHeight: 1.35,
              fontWeight: 500,
              color: "#d4d4d8",
            }}
          >
            Perfumes árabes, importados e fragrâncias premium selecionadas para
            marcar presença.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "38px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#facc15",
            }}
          >
            Atendimento pelo WhatsApp • Envio para todo o Brasil
          </div>
        </div>

        <div
          style={{
            width: "260px",
            height: "390px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: "105px",
              height: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #facc15",
              borderBottom: "none",
              borderRadius: "18px 18px 0 0",
              background: "#171717",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "14px",
                display: "flex",
                borderRadius: "9999px",
                background: "#facc15",
              }}
            />
          </div>

          <div
            style={{
              width: "235px",
              height: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "4px solid #facc15",
              borderRadius: "30px",
              background:
                "linear-gradient(145deg, rgba(250,204,21,0.18), rgba(0,0,0,0.95))",
              boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 900,
                color: "#facc15",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              Bold
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "8px",
                fontSize: "17px",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Parfum
            </div>

            <div
              style={{
                width: "90px",
                height: "2px",
                display: "flex",
                marginTop: "22px",
                background: "#facc15",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}