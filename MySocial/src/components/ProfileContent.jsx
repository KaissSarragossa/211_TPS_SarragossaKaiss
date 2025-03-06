import './profilecontent.css'

function ProfileContent(prop) {
  return (
    <>
        <div class="profile">
            <div class="profile-name-image">
                <img src={prop.profileimage} alt=""/>
                <h1 class="profile-user-name">{prop.nom}</h1>
            </div>
            <div class="profile-bio">
                <p>{prop.bio}</p>
            </div>
            <div class="profile-stats">
                <ul>
                    <li>{prop.post} post</li>
                    <li>{prop.followers} followers</li>
                    <li>{prop.following} following</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default ProfileContent;