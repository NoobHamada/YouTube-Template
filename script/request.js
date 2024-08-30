let request = new XMLHttpRequest()
request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.responseText)

        for (i = 0; i < object.length; i++) {
            let video_container = document.getElementById("videos-container")
            let video_box = document.createElement('div')
            video_box.classList = 'video'

            // Video video_thumbnails
            let video_thumbnail = document.createElement('div')
            video_thumbnail.classList = 'thumbnails'
            video_thumbnail.innerText = `Virtual Video Thumbnail No. ${i + 1}`
            video_box.appendChild(video_thumbnail)

            // Video video_name + Views Count + Time <<<< time not finished
            let video_name = document.createElement('div')
            video_name.style.color = '#FFF'
            video_name.style.marginLeft = '50px'
            video_name.innerText = object[i].title
            let channelImg = document.createElement('i')
            channelImg.classList = 'channelImg bi bi-person-circle'
            let video_views = document.createElement('span')
            video_views.innerText =`${object[i].views} views`
            video_views.style.marginLeft = '50px'
            let video_date = document.createElement('span')
            video_date.innerText = ` ${object[i].time}`

            video_container.appendChild(video_box)

            video_box.appendChild(channelImg)
            video_box.appendChild(video_name)
            video_box.appendChild(video_views)
            video_box.appendChild(video_date)
        }
    }
}
request.open('get', 'script/data.json', true);
request.send()