// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');
let images = [];
FilePond.registerPlugin(FilePondPluginImagePreview);

// Create a FilePond instance
const pond = FilePond.create(inputElement);

document.addEventListener("FilePond:updatefiles", (e) => {
  images = e.detail.items.map((item) => item.file);

  console.log(images);
});

document.getElementById("uploadButton").addEventListener("click", async () => {
  const formData = new FormData();

  images.forEach((image) => formData.append("images", image));

  try {
    const response = await fetch("http://localhost:3000/gallery", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // console.log(data)
    if (data?.success) {
      const toastLiveExample = document.getElementById("notificationToast");

      const toast = new bootstrap.Toast(toastLiveExample);

      toast.show();

      window.location.href = "/gallery";

    }else{
      const toastLiveExample = document.getElementById("failedToast");

      const toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
