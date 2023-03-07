const updateForm = document.getElementById("updateForm");
const deleteButtons = document.querySelectorAll(".delete");
const confirmDelete = document.getElementById("confirmDelete");

for (const deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", async () => {
    const newsId = deleteButton.id.split("_")[1];

    console.log(newsId)

    if (!confirm("Are you sure you want to delete image")) return;
    //delete item
    const response = await fetch(`/news/${newsId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "/news";
    }
  });
}
