const yorumlar = JSON.parse(sessionStorage.getItem("yorumlar")) || [];

    const yorumlarAlani = document.getElementById("yorumlarAlani");

    function yorumlariGoster() {
      yorumlarAlani.innerHTML = "";
      yorumlar.forEach(function(yorum) {
        const div = document.createElement("div");
        div.className = "yorum";
        div.innerHTML = `<strong>${yorum.isim}</strong><br>${yorum.metin}`;
        yorumlarAlani.appendChild(div);
      });
    }

    yorumlariGoster();

    document.getElementById("yorumFormu").addEventListener("submit", function(e) {
      e.preventDefault();

      const isim = document.getElementById("isim").value;
      const metin = document.getElementById("yorum").value;

      yorumlar.push({ isim, metin });

      sessionStorage.setItem("yorumlar", JSON.stringify(yorumlar));

      document.getElementById("yorumFormu").reset();

      yorumlariGoster();
    });

