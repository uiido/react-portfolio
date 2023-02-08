import React from 'react';
import ProfilePhoto from '../../assets/profile-photo.jpeg'

export default function About() {
    return (
        <div class="container p-2 mt-3">
            <h2 class="text-center text-primary fw-bolder pb-3 mb-3">here's what to know about me</h2>
            <div class="row d-flex justify-content-center">
                <div class="col-4">
                    <img src={ProfilePhoto} className='img-fluid rounded' alt='Profile photo' />
                </div>
                <div class="col-6">
                    <p><span class="fw-bolder fs-4 text-secondary">Hi, I'm Erin Bowen!</span>
                        <br /><br />

                        I'm an animator, illustrator, full-stack developer based in the American east coast.
                        <br /><br />

                        Macaroon brownie croissant cotton candy cupcake donut. Candy canes powder bonbon danish cotton candy dessert carrot cake biscuit. Tart chocolate cake soufflé pie marshmallow tart candy canes. Liquorice sesame snaps gummi bears pie chocolate cake brownie cake marshmallow.
                        <br /><br />

                        Muffin halvah cake dragée cupcake topping. Oat cake chocolate cake jelly beans liquorice halvah gummi bears marshmallow. Jujubes brownie cotton candy danish chupa chups caramels sesame snaps apple pie apple pie. Bear claw donut jujubes cupcake chupa chups danish shortbread chupa chups.
                    </p>
                </div>
            </div>
        </div>
    );
}