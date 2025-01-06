import { submitStyle } from "@/utils/customTwStyles";

interface Props {
  loading: boolean;
  value: string;
  className?: string;
}


export const SubmitButton = ({ loading, value, className = '' }: Props) => {
  return (
    <div className='button--container'>
      {loading ? (
        <button className={`${submitStyle} ${className}`} id='btnSend' disabled>
          <svg
            xmlns='http://www.w3.org/2200/svg'
            style={{
              margin: 'auto',
              shapeRendering: 'auto',
              width: '20px',
              height: '20px',
              overflow: 'hidden',
            }}
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid'
          >
            <circle
              cx='50'
              cy='50'
              fill='none'
              stroke='#fdfdfd'
              strokeWidth='12'
              r='26'
              strokeDasharray='122.52211349000194 42.840704496667314'
            >
              <animateTransform
                attributeName='transform'
                type='rotate'
                repeatCount='indefinite'
                dur='1.5384615384615383s'
                values='0 50 50;360 50 50'
                keyTimes='0;1'
              ></animateTransform>
            </circle>
          </svg>
        </button>
      ) : (
        <input
          type='submit'
          className={`${submitStyle} ${className}`}
          id='btnSend'
          value={value}
        />
      )}
    </div>
  );
};
