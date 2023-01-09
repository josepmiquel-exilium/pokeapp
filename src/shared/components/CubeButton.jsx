export default function CubeButton({ textOne, textTwo, colorOne, colorTwo }) {
    return (
        <div class="button-flipper">
            <button class="front-button">{textOne}</button>
            <button class="back-button">{textTwo}</button>
        </div>
    );
}
