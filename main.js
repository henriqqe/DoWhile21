const linksSocialMedia = {
  github: 'henriqqe',
  youtube: 'channel/UCSSZ5CVezWN5hAq6V1wK_bQ',
  facebook: 'henriqueeee111',
  instagram: 'seja_bem_vindo11',
  twitter: 'seja_bem_vindo1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// nova funçao pra ir la no github, pegar as informaçoes de lá e depois substituirmos no HTML

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
