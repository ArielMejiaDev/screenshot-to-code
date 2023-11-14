interface Props {
  code: string;
}

function Preview({ code }: Props) {
  return (
    <div className="w-[704px]">
      <iframe
        title="Iframe Example"
        srcDoc={code}
        className="border-[5px] border-black rounded-[33px] p-4 shadow-lg 
        transform scale-[0.8] origin-top-left w-[1280px] h-[832px]"
      ></iframe>
    </div>
  );
}
export default Preview;