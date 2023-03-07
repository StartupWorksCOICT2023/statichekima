console.log("hello");

async function removeVideo(e) {
  const video_id = e.target.id.split("_")[1];

  if (!confirm("Are you sure you want to delete video")) return;

  const response = await fetch(`http://localhost:3000/videos/${video_id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  if (data.success) {
    e.target.parentElement.remove();
  }

}


async function removeImage(e) {
    const image_id = e.target.id.split("_")[1];
  
    if (!confirm("Are you sure you want to delete image")) return;
  
    const response = await fetch(`http://localhost:3000/images/${image_id}`, {
      method: "DELETE",
    });
  
    const data = await response.json();
  
    if (data.success) {
      e.target.parentElement.remove();
    }
  
  }
