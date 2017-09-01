package gcss.server;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class GCSSGQStats {
	
	protected static Shell shell;
	protected static Text textUser;
	protected static Text textPassword;
	protected static Text textTimeout;
	protected static Text textDate;
	protected static Text textMessage;
	protected Properties prop;
	Session session = null;
	
	
	public static void main(String[] args) {
		try {
			GCSSGQStats window = new GCSSGQStats();
			window.open();
		} 
		catch (Exception e) {
			textMessage.setText(""+e);
			e.printStackTrace();
		}
	}

	public void open() {
		Display display = Display.getDefault();
		createContents();
		shell.open();
		shell.layout();
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch()) {
				display.sleep();
			}
		}
	}

	protected void createContents() {	    
	    		
		shell = new Shell();
		shell.setSize(520, 304);
		shell.setText("GCSS GQ Stats");
		
		loadProperties();		
		
		textMessage = new Text(shell, SWT.BORDER | SWT.READ_ONLY | SWT.WRAP | SWT.H_SCROLL | SWT.V_SCROLL | SWT.CANCEL);
		textMessage.setEditable(false);
		textMessage.setBounds(187, 7, 307, 255);
				
		Label separator = new Label(shell, SWT.SEPARATOR | SWT.HORIZONTAL);
		separator.setBounds(10, 72, 171, 8);
		
		Label lblUser = new Label(shell, SWT.NONE);
		lblUser.setBounds(10, 10, 64, 15);
		lblUser.setText("User Name: ");
		
		textUser = new Text(shell, SWT.BORDER);
		textUser.setBounds(80, 7, 88, 21);
		
		Label lblPassword = new Label(shell, SWT.NONE);
		lblPassword.setBounds(10, 48, 64, 15);
		lblPassword.setText("Password:");
		
		textPassword = new Text(shell, SWT.BORDER | SWT.PASSWORD);
		textPassword.setBounds(80, 45, 88, 21);
		
		Label lblSender = new Label(shell, SWT.NONE);
		lblSender.setBounds(10, 104, 64, 15);
		lblSender.setText("GQ Sender");

		final Combo comboSender = new Combo(shell, SWT.NONE);
		comboSender.setBounds(80, 101, 88, 23);
		String[] s = prop.getProperty("senders").split(";");
		for(int i=0; i<s.length; i++) 
		comboSender.add(s[i]);
		comboSender.setText("-- Sender --");

		Label lblTimeout = new Label(shell, SWT.NONE);
		lblTimeout.setBounds(10, 146, 55, 15);
		lblTimeout.setText("Timeout");

		textTimeout = new Text(shell, SWT.BORDER);
		textTimeout.setBounds(80, 143, 88, 21);

		Label lblDate = new Label(shell, SWT.NONE);
		lblDate.setBounds(10, 186, 55, 30);
		lblDate.setText("    Date \r\nYYMMDD");

		textDate = new Text(shell, SWT.BORDER);
		textDate.setBounds(80, 183, 88, 21);

		Button btnGqStats = new Button(shell, SWT.NONE);
		btnGqStats.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
			    
				//String host = "10.255.111.152";
				String host = prop.getProperty("host");
				System.out.println(""+host);
			    String script = prop.getProperty("script");
			    
			    String user = textUser.getText();
			    String password = textUser.getText();
			    
			    String date = textDate.getText();
			    String timeout = textTimeout.getText();
			    String sender = comboSender.getText();
			    
			    String command = ""+script+" "+date+" "+timeout+" "+sender+"";
			    System.out.println(""+command);
			   
			    java.util.Properties config = new java.util.Properties(); 
		    	config.put("StrictHostKeyChecking", "no");
		    	
		    	Session session = null;
				JSch jsch = new JSch();
		    	
				try {
					session = jsch.getSession(user, host, 22);
					session.setPassword(password);
					System.out.println("Session created");
					
				   	session.setConfig(config);
				   	System.out.println("Session configured");
				   	
		    		session.connect();
			    	System.out.println("session connected");
			    	
			    	Channel channel=session.openChannel("exec");
			    	System.out.println("channel opened");
			    	
			    	((ChannelExec)channel).setCommand(command);
			    	System.out.println("command set");
			    	
			        channel.setInputStream(null);
			        System.out.println("input stream set");
			        
			        ((ChannelExec)channel).setErrStream(System.err);
			        System.out.println("error stream set");
			        
			        InputStream in=channel.getInputStream();
			        System.out.println("input stream get");
			        
			        channel.connect();
			        System.out.println("channel connected");
			        
			        byte[] tmp=new byte[1024];
			        
			        System.out.println("Fetching GQ stats...");
			        
			        while(true){
			          while(in.available()>0){
			            int i=in.read(tmp, 0, 1024);
			            if(i<0)break;
			            System.out.print(new String(tmp, 0, i));
			            textMessage.setText(new String(tmp, 0, i));
			          }
			          if(channel.isClosed()){
			        	System.out.println("channel closed");
			            break;			            
			          }
			          try{
			        	  Thread.sleep(1000);
			        	  }
			          catch(Exception ee)
			          {
			        	  System.out.println("can't sleep");
			          }
			        }
			        
			        channel.disconnect();
			        System.out.println("channel disconnected");
			        
			        session.disconnect();
			        System.out.println("session disconnected");
			    }
			    catch(Exception e1){
			    	e1.printStackTrace();
			    } 
			}
		});
		btnGqStats.setBounds(52, 222, 75, 25);
		btnGqStats.setText("GQ Stats");
				
	}

	protected void loadProperties(){
		try {
			prop = new Properties();
			//System.out.println("prop object");
			prop.load(new FileInputStream("GCSSGQ.properties"));
			System.out.println("Properties loaded");
		}
		catch(Exception e){
			textMessage.setText("" + e);
		}		
	}
	
	
		
		
}
	

