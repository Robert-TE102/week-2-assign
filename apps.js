const images = [
  {
    image: `https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    thumbnail: `https://unsplash.com/photos/dolphin-K6kZKJOmZrk`,
    alt: `Dolphin smiling in the sea.`,
  },
  {
    image: `https://images.unsplash.com/photo-1605885124980-6e9456ea7840?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    thumbnail: `https://unsplash.com/photos/black-and-white-whale-on-blue-water-DKPtbX1T7Fc`,
    alt: `Dolphin on the edge of a pool.`,
  },
  {
    image: `https://images.unsplash.com/photo-1547382442-d17c21625a44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    thumbnail: `https://unsplash.com/photos/dolphin-jumping-on-sea-during-daytime-UaaHbkk40Ow`,
    alt: `Dolphin jumping in the air out of the sea.`,
  },
  {
    image: `https://images.unsplash.com/photo-1591706405280-f03acb082051?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    thumbnail: `https://unsplash.com/photos/a-couple-of-dolphins-are-swimming-in-the-water-fgKEqVzX5zM`,
    alt: `2 Dolphins hugging and smiling.`,
  },
];

let thumbContainer = document.getElementById("thumb-container");
let currentImageIndex = 0;
const displayElem = document.getElementById("display");

function init() {
  console.log(images);
  updateDisplayImage(images[currentImageIndex]);
  createThumbnails();
}

function createThumbnails() {
  for (let image of images) {
    let thumbImg = document.createElement("img");

    thumbImg.setAttribute("src", image.image);
    thumbImg.setAttribute("alt", image.alt);
    thumbImg.setAttribute("tabindex", "1");
    thumbImg.classList.add("thumb-image");
    thumbContainer.appendChild(thumbImg);
    thumbImg.addEventListener("click", function () {
      updateDisplayImage(image);
      document.getElementById("announcer").textContent = image.alt;
    });
    thumbImg.addEventListener("keydown", function (event) {
      document.getElementById("announcer").textContent = image.alt;
      if (event.key === "Enter") updateDisplayImage(image);
    });
  }
}

function updateScrollBar(currentImage) {
  let thumbnails = thumbContainer.querySelectorAll(".thumb-image");
  let activeThumbnail;
  thumbnails.forEach(function (thumb) {
    if (thumb.getAttribute("src") === currentImage.thumbnail) {
      activeThumbnail = thumb;
    }
  });

  if (activeThumbnail) {
    const thumbRect = activeThumbnail.getBoundingClientRect();
    const containerRect = thumbContainer.getBoundingClientRect();

    let scrollLeftPos =
      activeThumbnail.offsetLeft +
      thumbRect.width / 2 -
      containerRect.width / 2;

    thumbContainer.scrollTo({
      left: scrollLeftPos,
      behavior: "smooth",
    });
  }
}

function updateDisplayImage(images) {
  let currentDisplayImage = displayElem.firstChild;

  if (!currentDisplayImage) {
    currentDisplayImage = document.createElement("img");
    displayElem.appendChild(currentDisplayImage);
  }
  displayElem.innerHTML = "";
  currentDisplayImage = document.createElement("img");
  currentDisplayImage.setAttribute("src", images[0].images);
  currentDisplayImage.setAttribute("alt", images[0].alt);
  updateScrollBar(images);
  document.getElementById("announcer").textContent = images.alt;
}

updateDisplayImage(images);

next.addEventListener("click", function () {
  selectNextImage(1);
});
prev.addEventListener("click", function () {
  selectNextImage(-1);
});

thumbContainerHideButton.addEventListener("click", function () {
  thumbContainer.classList.toggle("hidden");
  if (thumbContainer.classList.contains("hidden")) {
    thumbContainerHideButton.classList.add(
      "thumbContainerHideButton-thumbnailsHidden"
    );
  } else {
    thumbContainerHideButton.classList.remove(
      "thumbContainerHideButton-thumbnailsHidden"
    );
  }
});

function selectNextImage(index) {
  currentImageIndex += index;

  if (currentImageIndex >= images.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  console.log(currentImageIndex);
  updateDisplayImage(images[currentImageIndex]);
}
