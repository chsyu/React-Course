export default function Header({title, slogan}) {
    return (
        <header className="text-center d-flex row flex-column">
            <h2 className="text-white pt-5 pb-2">
                {title}
            </h2>

            <p
                className="text-light opacity-3">
                {slogan}
            </p>
            <div className="flex mt-6 justify-center">
                <hr className="hr-header-line rounded" />
            </div>
        </header>
    );
}